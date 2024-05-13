'use client';

import { createContext, useContext, useState } from "react";
import { MainContext } from "../layout";
import { useRouter, useSearchParams } from "next/navigation";

export const DashboardContext = createContext({})

export default function Layout({children}){
    const ctx = useContext(MainContext)
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const [exportCanvas, setExportCanvas] = useState(null)
    const [exportPhoto, setExportPhoto] = useState("")
    const [photo, setPhoto] = useState("")

    function generateLink(path){
        return `/dashboard/${searchParams.get('device') || 'phone'}${path}?${searchParams.toString()}`
    }
    function navigate(path){
        router.push(generateLink(path))
    }
    return <DashboardContext.Provider value={{socket: ctx.socket, generateLink, navigate, photo, setPhoto, exportPhoto, setExportPhoto, exportCanvas, setExportCanvas}}>
        {children}
    </DashboardContext.Provider>
}