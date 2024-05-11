import { HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import Spinner from "../Spinner";
import { motion } from "framer-motion";
import { IoColorWand } from "react-icons/io5";

export default function Connecting(){
    return <VStack as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} spacing={0} width={'350px'} paddingY={'50px'} rounded={'lg'} background={'white'} justifyContent={'center'}>
        <HStack mb={'20px'} background={'brand.500'} justifyContent={'center'} rounded={'full'} width={'75px'} height={'75px'}> 
            <Icon as={IoColorWand} fontSize={'40px'} color={'white'}/>
        </HStack>
        <HStack spacing={0}>
            <Heading color="brand.500">Sketch</Heading>
            <Heading>Book</Heading>
        </HStack>
            <Text marginBottom={'20px'} fontSize={'large'} fontWeight={'medium'} color={'blackAlpha.700'}>Design and Innovation Club</Text>
        <Spinner/>
    </VStack>
}