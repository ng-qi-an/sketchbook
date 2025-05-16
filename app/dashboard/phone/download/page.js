'use client';
import { Button, Circle, Icon, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";

export default function Download(){
    const searchQuery = useSearchParams()
    const [imageBlob, setImageBlob] = useState(null)

    useEffect(()=>{
        fetch(`https://api.ngqian.dev/sketchbook/getPhoto/${searchQuery.get('photoID')}`)
            .then(response => response.blob())
            .then(blob => {
                setImageBlob(blob)
            })
    }, [])
    function forceDownload(blob, fileName){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    return <>
        <VStack spacing={'30px'} width={'full'} bg={'white'} px={40} rounded={'20px'} p={'40px'}>
            <VStack height={'175px'} justifyContent={'center'} position={'relative'} width={'175px'}>
                <Icon as={IoArrowDown} fontSize={'75px'} color={'brand.500'}/>
                <Circle size="175px" position={'absolute'} top={0} left={0} border={'solid 7px'} borderColor="brand.500" />
            </VStack>
            <VStack w={'full'} spacing={'20px'}>
                <Text fontSize={'20px'} fontWeight={'semibold'}>
                    Save to your phone
                </Text>
                <Text textAlign={'center'}>
                    Press the Download button to save it to your phone. You can share this photo to others.
                </Text>
                <Button onClick={()=> {
                    var file = new File([imageBlob], `${searchQuery.get('photoID')}.png`, {type: imageBlob.type});
                    let shareData = {files: [file]}
                    if (navigator.canShare(shareData)){
                        navigator.share(shareData).then(()=> {
                            console.log('Shared')
                        })
                    } else {
                        toast({
                            title: "Share not supported",
                            description: "Your device does not support sharing files",
                            status: "error",
                            duration: 5000,
                            isClosable: true
                        })
                        forceDownload(imageBlob, searchQuery.get('photoID'))
                    }
                }} w={'full'} size={'lg'} colorScheme={'brand'} rounded={'full'}>Download</Button>
            </VStack>
        </VStack>
    </>
}