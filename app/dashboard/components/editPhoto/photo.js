'use client';

import { Divider, HStack, Image, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { DashboardContext } from "../../layout"
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function Photo({canvasRef, strokeColor}){
    const ctx = useContext(DashboardContext)
    useEffect(()=>{
        document.getElementById("canvasDrawing").addEventListener('touchstart', function( event ) { 
            event.preventDefault();
        }, false);
    }, [])
    return <VStack position={'relative'} spacing={0}>
        <VStack rounded={'20px'} overflow={'hidden'} background={'white'} p={'30px'}>
            <Image backgroundSize={'cover'} src={ctx.photo} objectFit={'cover'} objectPosition={'center'} minHeight={'400px'} maxH="400px" justifyContent={'center'} rounded={'20px'} minWidth={'300px'} maxW={'300px'}>
            </Image>
            <HStack w={'100%'} h={'1px'} bg={'blackAlpha.300'} mt={'30px'}/>
            <HStack w={'100%'} h={'1px'} bg={'blackAlpha.300'} mt={'30px'} mb={'10px'}/>
        </VStack>
        <ReactSketchCanvas
            id="canvasDrawing"
            ref={canvasRef}
            style={{position: 'absolute', top: 0, left: 0, zIndex: 10}}
            width="100%"
            height="100%"
            canvasColor="transparent"
            strokeColor={strokeColor}
            eraserWidth={28}
        />
    </VStack>
}