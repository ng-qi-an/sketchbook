import { IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { IoCrop, IoMenu } from "react-icons/io5";
import { DashboardContext } from "../../layout";

export default function LinesButton({lines, setLines, crop}){
    const ctx = useContext(DashboardContext)
    return <IconButton isDisabled={crop} pointerEvents={crop ? 'none' : 'all'} w={'48px'} h={'48px'} _hover={{}} onClick={()=> setLines(!lines)} bg={(!lines || crop) ? 'white' : 'brand.100'} colorScheme={'gray'} icon={<IoMenu/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
}