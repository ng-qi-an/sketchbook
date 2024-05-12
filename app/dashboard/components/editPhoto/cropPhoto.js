'use client';

import React, { useContext, useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { DashboardContext } from "../../layout";
import { Button } from "@chakra-ui/react";

export default function CropPhoto(){
    const cropperRef = useRef();
    const ctx = useContext(DashboardContext)
    const [cropper, setCropper] = useState(null)
    useEffect(()=>{
        if (cropperRef.current){
            setCropper(cropperRef.current.cropper)
        }
    }, [cropperRef])
  
    return <>
        <Cropper ready={()=>{
            console.log(cropperRef)
        }} viewMode={1} ref={cropperRef} cropBoxMovable={false} dragMode={'move'} autoCropArea={1} src={ctx.photo} aspectRatio={3 / 4} style={{ height: 400, width: "300px" }}
        />
        <Button onClick={()=>{
            console.log(cropperRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    ctx.setPhoto(url)
                }))
        }}>Get url</Button>
    </>
}