'use client';

import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Page(){
    return <>
    <Text as={motion.p} initial={{scale: 0}} animate={{scale: 1}}>hello</Text>
    </>
}