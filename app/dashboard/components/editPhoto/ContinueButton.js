import { Button } from "@chakra-ui/react";
import html2canvas from 'html2canvas';
import { useContext, useState } from "react";
import { DashboardContext } from "../../layout";
import { useRouter } from "next/navigation";
import Consent from "./Consent";

export default function ContinueButton({crop, mobile}){
    const [loading, setLoading] = useState(false)
    const [showConsent, setShowConsent] = useState(false)
    const ctx = useContext(DashboardContext)
    return <>
    {showConsent && <Consent onContinue={()=>{
        html2canvas(document.getElementById("photoDiv"), {backgroundColor: 'transparent'}).then(function(canvas) {
            canvas.toBlob((blob)=>{
                ctx.setExportBlob(blob)
                const url = URL.createObjectURL(blob);
                ctx.setExportPhoto(url)
                ctx.navigate('/exportPhoto')

            })
        });
    }}/>}
    <Button onClick={()=>{
        setLoading(true)
        setShowConsent(true)
    }} opacity={crop ? 0 : 1} isLoading={loading} pointerEvents={crop ? "none" : "all"} size={'lg'} bg={'white'} color={'brand.500'} rounded={'full'} mt={'10px'} w={mobile ? '300px' : '380px'}>
        Continue
    </Button>
    </>
}