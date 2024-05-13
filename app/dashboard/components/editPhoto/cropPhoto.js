'use client';

import React, { useContext, useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { DashboardContext } from "../../layout";
import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoSwapHorizontal } from "react-icons/io5";

export default function CropPhoto({cropper, setCropper}){
    const cropperRef = useRef();
    const ctx = useContext(DashboardContext)


    return <HStack position={'absolute'} top={0} left={0} zIndex={20} as={motion.div} key={'photoCrop'} layoutId="photo">
        <Cropper crop={()=> setCropper(cropperRef.current.cropper)} viewMode={1} ref={cropperRef} cropBoxMovable={false} dragMode={'move'} autoCropArea={1} src={ctx.photo} aspectRatio={3 / 4} style={{ height: '400px', width: "300px" }}/>
    </HStack>
}