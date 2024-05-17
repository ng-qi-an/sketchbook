import { Box, Button, Circle, HStack, Icon, IconButton, Popover, PopoverContent, PopoverTrigger, Text, VStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoInformationCircle, IoPencil, IoTrash } from "react-icons/io5";
import { BsFillEraserFill } from "react-icons/bs";
import { motion } from "framer-motion";
import CropButton from "./cropButton";
import LinesButton from "./linesButton";
export default function CanvasControls({canvasRef, strokeColor, setStrokeColor, mobile, crop, setCrop, cropper, setCropper, lines, setLines, eraseMode, setEraseMode}){
    useEffect(()=>{
        canvasRef.current.eraseMode(eraseMode)
    }, [eraseMode])
    const colors = ['var(--chakra-colors-black)', 'var(--chakra-colors-white)', 'var(--chakra-colors-red-500)', 'var(--chakra-colors-orange-500)', 'var(--chakra-colors-green-500)', 'var(--chakra-colors-blue-500)', 'var(--chakra-colors-purple-500)', 'var(--chakra-colors-pink-500)']
    return <>
        <VStack position={'relative'}>
            <IconButton _active={{}} isDisabled={crop} border={((!eraseMode && !crop) && strokeColor == 'var(--chakra-colors-white)') && '2px solid black'} color={(!eraseMode && !crop) && (strokeColor == 'var(--chakra-colors-white)' ? 'black' : 'white')} _hover={{}} bg={(eraseMode || crop) ? 'white' : strokeColor} onClick={()=> setEraseMode(false)} colorScheme={eraseMode ? 'gray' : 'brand'} icon={<IoPencil/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
            
        </VStack>
        <IconButton isDisabled={crop} _hover={{}} bg={(!eraseMode || crop) ? 'white' : 'brand.500'} onClick={()=> setEraseMode(true)} colorScheme={(!eraseMode || crop) ? 'gray' : 'brand'} icon={<BsFillEraserFill/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
        <CropButton crop={crop} setCrop={setCrop} cropper={cropper} setCropper={setCropper}/>
        <LinesButton crop={crop} lines={lines} setLines={setLines}/>
        <Popover placement="left">
            {({isOpen, onClose}) => (
                <>
                    <PopoverTrigger>
                        <IconButton isDisabled={crop} bg={'white'} _hover={{}} icon={<IoTrash/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
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