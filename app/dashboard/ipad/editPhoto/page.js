'use client';

import { Button, HStack, VStack } from "@chakra-ui/react";
import Photo from "../../components/editPhoto/photo";
import Stepper from "../../components/stepper";
import Watermark from "../../components/watermark";
import { useRef, useState } from "react";
import CanvasControls from "../../components/editPhoto/canvasControls";
import CropPhoto from "../../components/editPhoto/cropPhoto";
import PhotoControls from "../../components/editPhoto/photoControls";
import CropButton from "../../components/editPhoto/cropButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Page(){
    const canvasRef = useRef()
    const [strokeColor, setStrokeColor] = useState("var(--chakra-colors-black)")
    const [crop, setCrop] = useState(false)
    const [cropper, setCropper] = useState(null)
    return <>
    <Watermark position="fixed" top={"20px"} left={"30px"}/>
    <Stepper step={2} title={'Edit your photo'} mobile={false}/>
    <HStack h={'25px'}/>
    <HStack alignItems={'flex-start'}>
        <CropButton crop={crop} setCrop={setCrop} cropper={cropper} setCropper={setCropper}/>
        <VStack position={'relative'} spacing={0}>
            {crop && <CropPhoto cropper={cropper} setCropper={setCropper}/>}
            <Photo canvasRef={canvasRef} strokeColor={strokeColor} showPhoto={!crop}/>
        </VStack>
        <AnimatePresence mode="wait">
            {crop ?
                <VStack key={'photoControls'} as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  bg={'white'} p={'5px 5px'} rounded={'full'}>
                    <PhotoControls key={'photoControls'} cropper={cropper} setCropper={setCropper} crop={crop} setCrop={setCrop} />
                </VStack>
            :
                <VStack key={'canvasControls'} as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} bg={'white'} p={'5px 5px'} rounded={'full'}>
                <CanvasControls  canvasRef={canvasRef} setStrokeColor={setStrokeColor} strokeColor={strokeColor}/>
                </VStack>
            }
        </AnimatePresence>
    </HStack>
    <Button opacity={crop ? 0 : 1} pointerEvents={crop ? "none" : "all"} size={'lg'} bg={'white'} color={'brand.500'} rounded={'full'} mt={'10px'} w={'300px'}>
        Continue
    </Button>
    </>
}