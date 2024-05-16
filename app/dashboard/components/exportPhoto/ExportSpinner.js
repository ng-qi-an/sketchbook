'use client';

import Spinner from "@/components/Spinner";
import { Icon, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";

export default function ExportSpinner({step}){
    return <VStack position={'relative'} minH={'175px'} minW={'175px'} justifyContent={'center'}>
        <AnimatePresence mode="wait">
        {step == 4 ? 
            <motion.span key={'exportCheckmark'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Icon color={'brand.500'} as={IoCheckmark} fontSize={'75px'}/>
            </motion.span>
        :
            <Text as={motion.p} key={'exportPercentage'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} fontSize={'25px'} fontWeight={'semibold'}>{step * 25}%</Text>
        }
        </AnimatePresence>
        <Spinner position={'absolute'} top={0} left={0} size={175} value={step * 25}/>
    </VStack>
}