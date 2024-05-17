'use client';

import { Button, HStack, Icon, IconButton, Spacer, VStack, useMouseDownRef } from "@chakra-ui/react";
import Photo from "../../components/editPhoto/photo";
import Stepper from "../../components/stepper";
import Watermark from "../../components/watermark";
import { useRef, useState } from "react";
import CanvasControls from "../../components/editPhoto/canvasControls";
import CropPhoto from "../../components/editPhoto/cropPhoto";
import PhotoControls from "../../components/editPhoto/photoControls";
import CropButton from "../../components/editPhoto/cropButton";
import { AnimatePresence, motion } from "framer-motion";
import ContinueButton from "../../components/editPhoto/ContinueButton";
import LinesButton from "../../components/editPhoto/linesButton";
import CanvasOptions from "../../components/editPhoto/canvasOptions";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";

export default function Page(){
    const canvasRef = useRef()
    const [strokeColor, setStrokeColor] = useState("var(--chakra-colors-black)")
    const [eraseMode, setEraseMode] = useState(false)
    const [eraserWidth, setEraserWidth] = useState(25)
    const [lines, setLines] = useState(true)
    const [crop, setCrop] = useState(false)
    const [cropper, setCropper] = useState(null)
    const [more, setMore] = useState(false)
    return <>
    <Stepper step={2} title={'Edit your photo'} mobile={true}/>
    <HStack h={'15px'}/>
    <VStack w={'full'} justifyContent={'center'} alignItems={'center'}>
        
        <VStack position={'relative'} spacing={0}>
            {crop && <CropPhoto mobile={true} cropper={cropper} setCropper={setCropper}/>}
            <Photo mobile={true} eraserWidth={eraserWidth} setEraserWidth={setEraserWidth} lines={lines} setLines={setLines} canvasRef={canvasRef} strokeColor={strokeColor} showPhoto={!crop}/>
        </VStack>
        <HStack justifyContent={'center'} key={'canvasControls'} as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} bg={'white'} p={'5px 5px'} rounded={'full'}>
            {!more ? 
                <HStack as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <CanvasControls eraseMode={eraseMode} setEraseMode={setEraseMode} canvasRef={canvasRef} setStrokeColor={setStrokeColor} strokeColor={strokeColor} crop={crop} setCrop={setCrop} cropper={cropper} setCropper={setCropper} lines={lines} setLines={setLines}/>
                </HStack>
            : crop ?
                <HStack spacing={0} as={motion.div} key={'photoControls'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} bg={'white'} py={'15px 0px'} h={'48px'} rounded={'full'}>
                    <PhotoControls cropper={cropper} setCropper={setCropper} crop={crop} setCrop={setCrop} />
                </HStack>
            :
                <HStack spacing={0} key={'photoControls'} as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} bg={'white'} py={'10px'} pl={'15px'} h={'48px'} rounded={'full'}>
                    <CanvasOptions mobile setEraserWidth={setEraserWidth} eraserWidth={eraserWidth}  eraseMode={eraseMode} setEraseMode={setEraseMode} canvasRef={canvasRef} setStrokeColor={setStrokeColor} strokeColor={strokeColor} crop={crop} setCrop={setCrop} cropper={cropper} setCropper={setCropper} lines={lines} setLines={setLines}/>
                </HStack>
            }
            <IconButton onClick={()=>{
                setMore(!more)
            }} transform={`rotate(${more ? '180deg' : '0deg'})`} rounded={'full'} bg={'white'} icon={<Icon as={IoChevronForward}/>}/>
        </HStack>
    </VStack>
    <ContinueButton mobile crop={crop}/>
    </>
}