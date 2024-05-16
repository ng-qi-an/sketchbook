import { Heading, Text, VStack } from "@chakra-ui/react"

export default function ExportParagraph({step, mobile}){
    const titles = ["Processing your photo", "Uploading your photo", "Generating export link", "Preparing export screen"]
    const descriptions = ["Compiling your drawings and photo edits", "Uploading your compiled image for download", "Creating a unique download link", "Generating QR Code"]
    return <VStack spacing={'5px'} alignItems={mobile ? 'center' : "start"}>
        <Text fontSize={'20px'} fontWeight={'600'}>{titles[step - 1]}</Text>
        <Text fontWeight={'medium'} opacity={0.7}>{descriptions[step - 1]}</Text>
    </VStack>
}