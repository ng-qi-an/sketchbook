'use client';

import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Center, HStack, Heading, Image, PinInput, PinInputField, VStack, Wrap, WrapItem, useDisclosure, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../layout";

export default function Page(){
    const [width, setWidth] = useState(0)
    const [password, setPassword] = useState('')
    const [photos, setPhotos] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ctx = useContext(DashboardContext)
    const toast = useToast()
    useEffect(()=>{
        const maxWidth = 0.9 * (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
        console.log(maxWidth)
        console.log(Math.floor(maxWidth / (200 + 15)))
        setWidth(Math.floor(maxWidth / (200 + 15)) * (200 + 15) - 15)
        onOpen()

        ctx.socket.on("updateScreen", (data)=>{
            setPhotos(data.photos)
        })

        ctx.socket.on("connectScreen", (data)=>{
            if (data.status == 'success'){
                setPhotos(data.photos)
                onClose()
            } else {
                setPassword("")
                toast({
                    title: "Incorrect Password",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true
                })
            }
        })
        return ()=>{
            ctx.socket.off("connectScreen")
        }
    }, [])
    
    return <>
    <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay>
            <AlertDialogContent>
            <AlertDialogHeader textAlign={'center'} fontSize='lg' fontWeight='bold'>
                Login to Display
            </AlertDialogHeader>
            <AlertDialogBody>
                <HStack w={'full'} justifyContent={'center'}>
                    <PinInput autoFocus value={password} onChange={(e)=>{
                        setPassword(e)
                    }} mask onComplete={(e)=>{
                        ctx.socket.emit("connectScreen", {'password': e})
                    }}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </AlertDialogBody>
            <AlertDialogFooter>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    <Center w={'full'} h={'full'} bg={'gray.100'}> 
        <VStack overflow={'auto'} w={`${width}px`} h={'full'} pt={'150px'}>
            <Center position={'fixed'} top={0} left={0} w={'100vw'} h={'95px'}>
                <Center shadow={'base'} w={'300px'} h={'full'} bg={'brand.600'} roundedBottom={'20px'}>
                    <HStack spacing={0}>
                        <Heading fontWeight={'semibold'} fontSize={'30px'} color="white">Sketch</Heading>
                        <Heading fontWeight={'semibold'} fontSize={'30px'} color="white">Book</Heading>
                    </HStack>
                </Center>
            </Center>
            <Wrap spacing={'15px'} h={'full'}>
                {photos.map((photo, index)=>{
                    return <WrapItem rounded={'lg'} border={'solid 2px'} borderColor={'gray.300'} key={index}>
                        <Image src={`https://api.ngqian.dev/sketchbook/getDirectPhoto/${photo}?password=${password}`} width={'200px'}/>
                    </WrapItem>
                })}
            </Wrap>
        </VStack>
    </Center>
    </>
}