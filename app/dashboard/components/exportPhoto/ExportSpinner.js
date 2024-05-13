'use client';

import Spinner from "@/components/Spinner";
import { Text, VStack } from "@chakra-ui/react";

export default function ExportSpinner({step}){
    return <VStack position={'relative'} h={'175px'} w={'175px'} justifyContent={'center'}>
        <Text fontSize={'25px'} fontWeight={'semibold'}>{step * 25}%</Text>
        <Spinner position={'absolute'} top={0} left={0} size={175} value={step * 25}/>
    </VStack>
}