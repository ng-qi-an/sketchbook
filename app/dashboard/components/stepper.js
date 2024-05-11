'use client';

import { HStack, Text, VStack } from "@chakra-ui/react";


export default function Stepper({step, title, mobile}){
    return <HStack spacing={'15px'} width={mobile ? '100%' : '500px'} py={'15px'} px={'40px'} rounded={'full'} bg={'white'}>
        <VStack height={'50px'} width={'50px'} rounded={'full'} background={'brand.100'} justifyContent={'center'}>
            <Text fontWeight={'medium'} fontSize={'20px'}>{step}</Text>
        </VStack>
        <Text fontWeight={'semibold'} fontSize={'25px'}>{title}</Text>
    </HStack>
}