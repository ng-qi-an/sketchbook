'use client';

import { Button, HStack, VStack } from "@chakra-ui/react";
import Photo from "../../components/editPhoto/photo";
import Stepper from "../../components/stepper";
import Watermark from "../../components/watermark";
import { useRef, useState } from "react";
import CanvasControls from "../../components/editPhoto/canvasControls";
import CropPhoto from "../../components/editPhoto/cropPhoto";

export default function Page(){
    const canvasRef = useRef()
    const [strokeColor, setStrokeColor] = useState("var(--chakra-colors-black)")
    const [show, setShow] = useState(true)
    return <>
    <Watermark position="fixed" top={"20px"} left={"30px"}/>
    <Stepper step={2} title={'Edit your photo'} mobile={false}/>
    <HStack h={'25px'}/>
    <HStack alignItems={'flex-start'}>
        <Photo canvasRef={canvasRef} strokeColor={strokeColor}/>
        {/* <Button onClick={()=> {
            setShow(false)
            setInterval(()=>{
                setShow(true)
            }, 100)
        }}>Crop</Button>
        {show && <CropPhoto/>} */}
        <VStack bg={'white'} p={'5px 5px'} rounded={'full'}>
            <CanvasControls canvasRef={canvasRef} setStrokeColor={setStrokeColor} strokeColor={strokeColor}/>
        </VStack>
    </HStack>
    </>
}