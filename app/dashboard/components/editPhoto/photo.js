'use client';

import { Divider, HStack, Icon, Image, Text, VStack, useToast } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { DashboardContext } from "../../layout"
import { ReactSketchCanvas } from "react-sketch-canvas";
import { IoInformationCircle } from "react-icons/io5";

export default function Photo({canvasRef, strokeColor, showPhoto, lines, mobile, eraserWidth, setEraserWidth}){
    const ctx = useContext(DashboardContext)
    const toast = useToast()
    useEffect(()=>{
        toast({
            duration: 3000,
            render: () => (
                <HStack onClick={()=>{
                    toast.closeAll()
                }} bg={'white'} p={'15px 25px'} rounded={'full'}>
                    <Icon fontSize={'25px'} color={'brand.500'} as={IoInformationCircle}/>
                    <Text fontWeight={'medium'}>Tap on the pen when selected to change colors</Text>
                </HStack>
            )
        })
    }, [])
    useEffect(()=>{
        document.getElementById("canvasDrawing").addEventListener('touchstart', function( event ) { 
            event.preventDefault();
        }, false);
    }, [])
    return <VStack id={'photoDiv'} opacity={showPhoto ? 1 : 0} transition={'linear all  0.3s'} position={'relative'} spacing={0}>
        <VStack position={'relative'} rounded={'20px'} overflow={'hidden'} background={'white'} p={'30px'}>
            {showPhoto ?
                <Image as={motion.img} key={'photo'} layoutId="photo" src={ctx.photo} objectFit={'cover'} objectPosition={'center'} minHeight={!mobile ? '240px' : '320px'} maxH={!mobile ? '240px' : '320px'} minWidth={mobile ? '240px' : '320px'} maxW={mobile ? '240px' : '320px'} justifyContent={'center'} rounded={'20px'} roundedBottom={0}/>
            :
                <VStack minHeight={!mobile ? '240px' : '320px'} maxH={!mobile ? '240px' : '320px'} minWidth={mobile ? '240px' : '320px'} maxW={mobile ? '240px' : '320px'} justifyContent={'center'} rounded={'20px'}/>
            }
            <VStack px={'10px'} w={'100%'}>
                <HStack opacity={lines ? 1 : 0} w={'100%'} h={'2px'} bg={'blackAlpha.300'} mt={'30px'}/>
                <HStack opacity={lines ? 1 : 0} w={'100%'} h={'2px'} bg={'blackAlpha.300'} mt={'30px'} mb={'20px'}/>
            </VStack>
            <Text position={'absolute'} left={'40px'} bottom={'20px'} fontSize={'12px'} opacity={0.85}>May 18 2024 | SJI Open House</Text>
        </VStack>
        <ReactSketchCanvas
            id="canvasDrawing"
            ref={canvasRef}
            style={{position: 'absolute', top: 0, left: 0, zIndex: 10}}
            width={mobile ? "300px" : '380px'}
            height={mobile ? "480px" : '400px'}
            canvasColor="transparent"
            strokeColor={strokeColor}
            eraserWidth={eraserWidth}
        />
    </VStack>
}