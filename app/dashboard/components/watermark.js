'use client';

import { HStack, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoColorWand } from 'react-icons/io5'
export default function Watermark(props){
    return <HStack as={motion.div} initial={{y: -50}} animate={{y: 0}} exit={{y: -50}} px={'20px'} py='10px' rounded={'20px'} background={props.transparent ? 'transparent' : 'white'} {...props}>
        <HStack background={'brand.500'} justifyContent={'center'} rounded={'full'} width={'40px'} height={'40px'}> 
            <Icon as={IoColorWand} fontSize={'20px'} color={'white'}/>
        </HStack>
        <HStack spacing={0}>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'brand.500'}>Sketch</Text>
            <Text fontSize={'20px'} fontWeight={'bold'}>Book</Text>
        </HStack>
    </HStack>
}