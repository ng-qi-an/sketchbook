import { IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { IoCrop } from "react-icons/io5";
import { DashboardContext } from "../../layout";

export default function CropButton({crop, setCrop, cropper, setCropper}){
    const ctx = useContext(DashboardContext)
    return <IconButton w={'58px'} h={'58px'} _hover={{}} onClick={()=> {
        if (crop){
            cropper.getCroppedCanvas().toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                ctx.setPhoto(url)
            })
            setCropper(null)
            setCrop(false)
        } else {
            setCrop(true)
        }
    }} bg={!crop ? 'white' : 'brand.500'} colorScheme={crop ? 'brand' : 'gray'} icon={<IoCrop/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
}