import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Spinner from "../Spinner";
import { motion } from "framer-motion";

export default function Connecting(){
    return <VStack as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1, opacity: 0}} spacing={0} width={'350px'} paddingY={'50px'} rounded={'lg'} background={'white'} justifyContent={'center'}>
        <HStack spacing={0}>
            <Heading color="brand.500">Sketch</Heading>
            <Heading>Book</Heading>
        </HStack>
            <Text marginBottom={'20px'} fontSize={'large'} fontWeight={'medium'} color={'blackAlpha.700'}>Design and Innovation Club</Text>
        <Spinner/>
    </VStack>
}