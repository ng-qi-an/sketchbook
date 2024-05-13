'use client';

import { HStack, Image, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DashboardContext } from "../../layout";
import Stepper from "../../components/stepper";
import { motion } from "framer-motion";
import ExportSpinner from "../../components/exportPhoto/ExportSpinner";

export default function Page(){
    const ctx = useContext(DashboardContext)
    const [exportStep, setExportStep] = useState(1)
    return <>
        <Stepper step={3} title={"Exporting your Photo"}/>
        <HStack mt={'30px'} as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} height={'350px'} overflow={'hidden'} width={'500px'} background={'white'} rounded={'20px'} px={'40px'} py={'20px'}>
            <ExportSpinner step={exportStep}/>
        </HStack>
    </>
}