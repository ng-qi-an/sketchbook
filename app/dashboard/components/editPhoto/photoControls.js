'use client';
import { IconButton } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { IoCrop, IoSwapHorizontal, IoSwapVertical } from "react-icons/io5";
import { DashboardContext } from "../../layout";

export default function PhotoControls({cropper, setCropper}){
    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)
    useEffect(()=>{
        cropper.scale(scaleX, scaleY)
    }, [scaleX, scaleY])
    const ctx = useContext(DashboardContext)
    return <>
        <IconButton onClick={()=> {
            if(scaleX == 1){
                setScaleX(-1)
            } else {
                setScaleX(1)
            }
        }} _hover={{}} bg={scaleX == 1 ? 'white' : 'brand.500'} colorScheme={scaleX == 1 ? 'gray' : 'white'} icon={<IoSwapHorizontal/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
        <IconButton onClick={()=> {
            if(scaleY == 1){
                setScaleY(-1)
            } else {
                setScaleY(1)
            }
        }} _hover={{}} bg={scaleY == 1 ? 'white' : 'brand.500'} colorScheme={scaleY == 1 ? 'gray' : 'white'} icon={<IoSwapVertical/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
    </>
}