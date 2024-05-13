import { IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { IoCrop, IoMenu } from "react-icons/io5";
import { DashboardContext } from "../../layout";

export default function LinesButton({lines, setLines, crop}){
    const ctx = useContext(DashboardContext)
    return <IconButton opacity={crop ? 0 : 1} pointerEvents={crop ? 'none' : 'all'} w={'58px'} h={'58px'} _hover={{}} onClick={()=> setLines(!lines)} bg={!lines ? 'white' : 'brand.500'} colorScheme={lines ? 'brand' : 'gray'} icon={<IoMenu/>} fontSize={'20px'} size={'lg'} rounded={'full'}/>
}