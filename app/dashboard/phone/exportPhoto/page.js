'use client';

import { Button, HStack, Heading, Icon, Image, Spacer, Text, VStack, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../layout";
import Stepper from "../../components/stepper";
import { motion } from "framer-motion";
import ExportSpinner from "../../components/exportPhoto/ExportSpinner";
import ExportParagraph from "../../components/exportPhoto/ExportParagraph";
import ExportController from "../../components/exportPhoto/ExportController";
import {QRCodeSVG} from 'qrcode.react';
import { IoLogoApple } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Page(){
    const ctx = useContext(DashboardContext)
    const toast = useToast()
    const [exportStep, setExportStep] = useState(1)
    const router = useRouter()
    useEffect(()=>{
        if (exportStep == 5){
            router.push(`http://10.72.1.211:3000/dashboard/phone/download?photoID=${ctx.exportLink}`)
        }
    }, [exportStep])
    return <>
        <ExportController exportStep={exportStep} setExportStep={setExportStep}/>
        <Stepper mobile step={3} title={"Exporting your Photo"}/>
        <VStack mt={'30px'} as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} overflow={'hidden'} width={'full'} background={'white'} rounded={'20px'} px={'40px'} py={'40px'}>
            {exportStep == 5 ? 
                <>
                    
                </>
            :
                <>
                    <ExportSpinner step={exportStep}/>
                    <ExportParagraph step={exportStep} mobile={true}/>

                </>
            }
        </VStack>
    </>
}