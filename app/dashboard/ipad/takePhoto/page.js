'use client';

import { Button, HStack, Icon, VStack } from "@chakra-ui/react";
import Stepper from "../../components/stepper";
import Watermark from "../../components/watermark";
import { motion } from "framer-motion";
import Uploader from "../../components/takePhoto/uploader";
import { useContext } from "react";
import { DashboardContext } from "../../layout";
import { IoArrowForward } from "react-icons/io5";

export default function TakePhoto(){
    const ctx = useContext(DashboardContext)
    return <>
        <Watermark position="fixed" top={"20px"} left={"30px"}/>
        <Stepper step={1} title={'Take a Photo'} mobile={false}/>
        <VStack mt={'30px'} as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} height={'350px'} overflow={'hidden'} width={'500px'} background={'white'} rounded={'20px'} px={'40px'} py={'20px'}>
            <HStack height={'100%'} width={'100%'} spacing={'20px'}>
                <Uploader/>
            </HStack>
            <Button onClick={()=> ctx.navigate('/editPhoto')} rightIcon={<Icon as={IoArrowForward}/>} isDisabled={!ctx.photo} colorScheme={'brand'} minH='48px' width={'100%'} size={'lg'} rounded="full">Continue</Button>
        </VStack>
    </>
}