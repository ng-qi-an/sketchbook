import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Spinner from "../Spinner";
import { motion } from "framer-motion";
export default function Disconnected(){
    return <>
    <Box as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} height={'100vh'} width={'100vw'} background={'blackAlpha.700'} position={'fixed'} top={0} left={0} zIndex={40}/>
    <VStack position={'fixed'} top={0} left={0} zIndex={50} width={'100%'} height={'100vh'} overflow={'auto'} justifyContent={'center'} alignItems={'center'}>
        <VStack as={motion.div} initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.9, opacity: 0}} spacing={0} width={'350px'} paddingY={'50px'} rounded={'lg'} background={'white'} justifyContent={'center'}>
            <HStack spacing={0}>
                <Heading>Disconnected</Heading>
            </HStack>
                <Text marginBottom={'20px'} fontSize={'large'} fontWeight={'medium'} color={'blackAlpha.700'}>Attempting to reconnect...</Text>
            <Spinner/>
        </VStack>
    </VStack>
    </>
}