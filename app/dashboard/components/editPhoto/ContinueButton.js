import { Button } from "@chakra-ui/react";
import html2canvas from 'html2canvas';
import { useContext, useState } from "react";
import { DashboardContext } from "../../layout";
import { useRouter } from "next/navigation";

export default function ContinueButton({crop}){
    const [loading, setLoading] = useState(false)
    const ctx = useContext(DashboardContext)
    return <Button onClick={()=>{
        setLoading(true)
        ctx.setExportCanvas(document.getElementById("photoDiv"))
        ctx.navigate('/exportPhoto')
    }} opacity={crop ? 0 : 1} isLoading={loading} pointerEvents={crop ? "none" : "all"} size={'lg'} bg={'white'} color={'brand.500'} rounded={'full'} mt={'10px'} w={'300px'}>
        Continue
    </Button>
}