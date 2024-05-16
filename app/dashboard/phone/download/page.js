'use client';
import { Button, Circle, Icon, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { IoArrowDown } from "react-icons/io5";

export default function Download(){
    const searchQuery = useSearchParams()
    
    function forceDownload(url, fileName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
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
                    Press the Download button to save it to your phone. You can share this page with others.
                </Text>
                <Button onClick={()=> forceDownload(`https://sketchbook.patstify.com/getPhoto/${searchQuery.get('photoID')}`, searchQuery.get('photoID'))} w={'full'} size={'lg'} colorScheme={'brand'} rounded={'full'}>Download</Button>
            </VStack>
        </VStack>
    </>
}