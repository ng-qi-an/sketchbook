'use client';

import { Button, HStack, Spacer, Text, VStack, systemProps } from "@chakra-ui/react";
import { useContext } from "react";
import { DashboardContext } from "../../layout";

export default function Onboarding({hug}){
    const ctx = useContext(DashboardContext)
    const steps = ['Take a photo with your friends or family', 'Add drawings, shapes, or effects', 'Export to your device!']
    return <VStack width={'100%'} height={!hug && '100%'} px={'40px'} py={'20px'} pt={0}>
        <Spacer/>
        <VStack width={hug ? 'full' : '360px'}>
            {steps.map((step, index)=>{
                return <HStack width={'100%'}>
                    <VStack minHeight={'40px'} maxH={'40px'} minWidth={'40px'} maxW={'40px'} rounded={'full'} background={'brand.100'} justifyContent={'center'}>
                        <Text fontWeight={'medium'}>{index + 1}</Text>
                    </VStack>
                    <Text fontWeight={'medium'}>{step}</Text>
                </HStack>
            })}
        </VStack>
        <Spacer/>
        <Button onClick={()=> ctx.navigate('/takePhoto')} size={'lg'} width={'100%'} rounded={'full'} colorScheme={'brand'}>Get Started</Button>
    </VStack>
}