'use client';

import { HStack, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../layout";
import Stepper from "../../components/stepper";
import { motion } from "framer-motion";
import ExportSpinner from "../../components/exportPhoto/ExportSpinner";
import ExportParagraph from "../../components/exportPhoto/ExportParagraph";
import ExportController from "../../components/exportPhoto/ExportController";
import {QRCodeSVG} from 'qrcode.react';

export default function Page(){
    const ctx = useContext(DashboardContext)
    const [exportStep, setExportStep] = useState(1)
    return <>
        <ExportController exportStep={exportStep} setExportStep={setExportStep}/>
        <Stepper step={3} title={"Exporting your Photo"}/>
        <HStack mt={'30px'} as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} height={'350px'} overflow={'hidden'} width={'500px'} background={'white'} rounded={'20px'} px={'40px'} py={'20px'}>
            {exportStep == 5 ? 
                <>
                    <VStack alignItems={'flex-start'} pr={'10px'}>
                        <Heading fontSize={'20px'} fontWeight={'semibold'}>Scan the QR Code</Heading>
                        <Text fontWeight={'medium'} opacity={0.7}>Use your phone's camera to scan the QR Code.</Text>
                    </VStack>
                    {/* ${window.location.protocol}${window.location.hostname} */}
                    <QRCodeSVG style={{minWidth: '175px', minHeight: '175px'}} value={`http://10.72.1.211:3000/dashboard/phone/download?photoID=${ctx.exportLink}`} size={200} bgColor="transparent" fgColor="var(--chakra-colors-brand-500)" />
                </>
            :
                <>
                    <ExportParagraph step={exportStep} mobile={false}/>
                    <Spacer/>
                    <ExportSpinner step={exportStep}/>
                </>
            }
        </HStack>
    </>
}