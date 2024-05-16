'use client'

import { Heading, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useContext, useRef } from "react"
import { IoCameraOutline } from "react-icons/io5"
import { DashboardContext } from "../../layout"
import { motion } from "framer-motion"

export default function Uploader({mobile}){
    const inputRef = useRef()
    const ctx = useContext(DashboardContext)
    return <>
    <VStack alignItems={mobile ? 'center' : 'start'} width={'100%'}>
        <Text fontSize={'larger'} fontWeight={'semibold'} textAlign={mobile && 'center'}>Take your photo</Text>
        <Text color={'blackAlpha.700'} textAlign={mobile && 'center'}>Tap the button on the {mobile ? 'top' : 'right'} to take a photo</Text>
    </VStack>
    <VStack onClick={()=>{
        inputRef.current.click()
    }} position={'relative'} _active={{transform: "scale(0.95)", borderColor: 'brand.400'}} backgroundSize={'cover'} backgroundImage={ctx.photo && `url(${ctx.photo})`} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} transition={'ease-in-out all 0.1s'} minHeight={'240px'} maxH="240px" justifyContent={'center'} rounded={'20px'} minWidth={'180px'} maxW={'180px'} border={'dashed 1px'} borderColor={ctx.photo ? 'transparent' : 'blackAlpha.300'}>
        {!ctx.photo && <IoCameraOutline fontSize={'50px'}/>}
        <Input onChange={(e)=>{
            if (e.target.files && e.target.files[0]) {
                console.log(URL.createObjectURL(e.target.files[0]))
                ctx.setPhoto(URL.createObjectURL(e.target.files[0]))
            }
        }} pointerEvents={'none'} opacity={0} height={0} ref={inputRef} type="file" accept="image/*"/>
    </VStack>
    </>
}