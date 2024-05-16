'use client';

import { useContext, useEffect } from "react";
import { DashboardContext } from "../../layout";
import { useToast } from "@chakra-ui/react";

export default function ExportController({exportStep, setExportStep}){
    const ctx = useContext(DashboardContext)
    
    const toast = useToast()
    useEffect(()=>{
        if (exportStep == 1){
            setTimeout(()=>{
                setExportStep(2)
            }, 500)
        } else if(exportStep == 2){
            fetch(ctx.exportPhoto)
            .then((res) => res.blob())
            .then((blob) => {
                console.log(blob)
                var reader = new FileReader();
                reader.readAsDataURL(blob); 
                reader.onloadend = function() {
                    var base64data = reader.result;
                    base64data = base64data.replace("data:image/png;base64,", "")
                    ctx.socket.emit("uploadPhoto", {photo: base64data})
                }
            })
        } else if (exportStep == 3){
            console.log(ctx.exportLink)
            setTimeout(()=>{
                setExportStep(4)
            }, 1000)
        } else if (exportStep == 4){
            setTimeout(()=>{
                setExportStep(5)
            }, 1000)
        }
    }, [exportStep])
    useEffect(()=>{
        ctx.socket.on("uploadPhoto", (data)=>{
            console.log(data)
            if (data.status == "success"){
                ctx.setExportLink(data.photoID)
                setExportStep(3)
            } else {
                console.error(data)
                toast({
                    status: "warning",
                    title: "Upload Failed",
                    description: "Photo upload failed, retrying...",
                    duration: 1000,
                    isClosable: true,
                })
                setExportStep(1)
            }
        })
        return ()=>{
            ctx.socket.off("uploadPhoto")
        }
    }, [])
}