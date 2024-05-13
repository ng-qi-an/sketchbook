import { Box, Button, Circle, HStack, Icon, IconButton, Popover, PopoverContent, PopoverTrigger, Text, VStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoInformationCircle, IoPencil, IoTrash } from "react-icons/io5";
import { BsFillEraserFill } from "react-icons/bs";
import { motion } from "framer-motion";
export default function CanvasControls({canvasRef, strokeColor, setStrokeColor, mobile}){
    const [eraseMode, setEraseMode] = useState(false)
    useEffect(()=>{
        canvasRef.current.eraseMode(eraseMode)
    }, [eraseMode])
    const colors = ['var(--chakra-colors-black)', 'var(--chakra-colors-white)', 'var(--chakra-colors-red-500)', 'var(--chakra-colors-orange-500)', 'var(--chakra-colors-green-500)', 'var(--chakra-colors-blue-500)', 'var(--chakra-colors-purple-500)', 'var(--chakra-colors-pink-500)']
    return <>
        <VStack position={'relative'}>
            <IconButton border={(!eraseMode && strokeColor == 'var(--chakra-colors-white)') && '2px solid black'} color={!eraseMode && (strokeColor == 'var(--chakra-colors-white)' ? 'black' : 'white')} _hover={{}} bg={eraseMode ? 'white' : strokeColor} onClick={()=> setEraseMode(false)} colorScheme={eraseMode ? 'gray' : 'brand'} icon={<IoPencil/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
            <Popover placement={mobile ? 'top' : 'right'}>
                {({isOpen, onClose}) => (
                    <>
                        <PopoverTrigger>
                            {!eraseMode ? <Box width={'100%'} height={'100%'} position={"absolute"} top={0} left={0} zIndex={10} bg={'transparent'} rounded={'full'}/> : <></>}
                        </PopoverTrigger>
                        <PopoverContent bg={'white'} rounded={'full'} w={'max-content'} padding={'10px 20px'}>
                            <HStack spacing={'5px'}>
                                {colors.map((color)=>{
                                    return <VStack onClick={()=> {setStrokeColor(color)}} w={'32px'} h={'32px'} justifyContent={'center'}>
                                        <Circle border={color == 'var(--chakra-colors-white)' && 'solid 1px black'} transition={'ease-in-out all 0.2s'} transform={strokeColor == color ? 'scale(1)' : 'scale(0.7)'} bg={color} w={'32px'} h={'32px'} rounded={'full'}/>
                                    </VStack>
                                })}
                            </HStack>
                        </PopoverContent>
                    </>
                )}
            </Popover>
        </VStack>
        <IconButton  _hover={{}} bg={!eraseMode ? 'white' : 'brand.500'} onClick={()=> setEraseMode(true)} colorScheme={!eraseMode ? 'gray' : 'brand'} icon={<BsFillEraserFill/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
        <Popover>
            {({isOpen, onClose}) => (
                <>
                    <PopoverTrigger>
                        <IconButton  bg={'white'} _hover={{}} icon={<IoTrash/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
                    </PopoverTrigger>
                    <PopoverContent w={'max-content'} bg='white' p={'10px'}>
                        <Button onClick={()=>{
                            canvasRef.current.clearCanvas()
                            onClose()
                        }} colorScheme={'red'}>Delete the drawing</Button>
                    </PopoverContent>
                </>
            )}
        </Popover>
    </>
}