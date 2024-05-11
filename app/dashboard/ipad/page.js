import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Watermark from "../components/watermark";
import Onboarding from "../components/index/onboarding";

export default function Page(){
    return <>
    <Watermark position="fixed" top={"20px"} left={"30px"}/>
    <VStack height={'500px'} overflow={'hidden'} width={'500px'} background={'white'} rounded={'20px'}>
        <VStack spacing={0} minHeight={'200px'} justifyContent={'center'} background={'brand.50'} width={'100%'}>
            <HStack spacing={0}>
                <Heading fontWeight={'semibold'} color="brand.500">Sketch</Heading>
                <Heading fontWeight={'semibold'}>Book</Heading>
            </HStack>
            <Text fontWeight={'medium'} color={'blackAlpha.700'}>Made by Design and Innovation Club</Text>
        </VStack>
        <Onboarding/>
    </VStack>
    </>
}