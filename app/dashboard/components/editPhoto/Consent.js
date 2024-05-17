'use effect';

import { useContext, useEffect } from "react";
import { DashboardContext } from "../../layout";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";

export default function Consent({onContinue}){
    const ctx = useContext(DashboardContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        onOpen()
    }, [])

    return <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
    >
        <AlertDialogOverlay>
        <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Share photo
            </AlertDialogHeader>

            <AlertDialogBody>
                Do you want to share your photo onto the iMac display behind the iPads? Your photo may also be used for future events.
            </AlertDialogBody>

            <AlertDialogFooter>
            <Button onClick={()=>{
                ctx.setGivenConsent(false)
                onClose()
                onContinue()
            }}>
                No, dont share
            </Button>
            <Button colorScheme='brand' onClick={()=>{
                ctx.setGivenConsent(true)
                onClose()
                onContinue()
            }} ml={3}>
                Yes, share
            </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
}