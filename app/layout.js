'use client';
import "./globals.css";
import { ChakraProvider, extendTheme, theme as defaultTheme, VStack, Image } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { gradients } from "./gradients";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from "framer-motion";
import { io } from "socket.io-client";
import Connecting from "@/components/loaders/connecting";
import Disconnected from "@/components/loaders/disconnected";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const MainContext = createContext({})

export default function RootLayout({ children }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [colorScheme, setColorScheme] = useState("green")
  const [loading, setLoading] = useState(true)
  const [socket, setSocket] = useState(false)
  const [disconnected, setDisconnected] = useState(false)
  // const [gradient, setGradient] = useState({
  //     colorScheme: 'gray',
  //     colors: ['#fff', '#fff']
  // })
  const theme = extendTheme({
    colors: {
      brand: {
        50: defaultTheme.colors[colorScheme][50],
        100: defaultTheme.colors[colorScheme][100],
        200: defaultTheme.colors[colorScheme][200],
        300: defaultTheme.colors[colorScheme][300],
        400: defaultTheme.colors[colorScheme][400],
        500: defaultTheme.colors[colorScheme][500],
        600: defaultTheme.colors[colorScheme][600],
        700: defaultTheme.colors[colorScheme][700],
        800: defaultTheme.colors[colorScheme][800],
        900: defaultTheme.colors[colorScheme][900],
      }
    },
    components: {
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          _active: {
            transform: "scale(0.95)",
          }
        },
      },
      IconButton: {
        // 1. We can update the base styles
        baseStyle: {
          _active: {
            transform: "scale(0.5)",
          }
        },
      },
    },
  })

  useEffect(()=>{
    // function rand(items) {
    //   // "|" for a kinda "int div"
    //   return items[items.length * Math.random() | 0];
    // }
    // const selectedGradient = rand(gradients)
    // setGradient(selectedGradient)
    // setColorScheme(selectedGradient.colorScheme)
    const iosocket = io(`https://sketchbook-api.ngqian.dev`)
    iosocket.once('connect', ()=>{
      setSocket(iosocket)
      console.log('[SOCKET] Connected to the server')
      if (pathname == '/dashboard/phone/download'){
        setLoading(false)
      } else {
        router.replace(`/?${searchParams.toString()}`)
        const device = searchParams.get('device') || 'phone'
        router.replace(`/dashboard/${device}?${searchParams.toString()}`)
      }
    })
  }, [])
  useEffect(()=>{
    if (socket && pathname.startsWith('/dashboard')){
      setTimeout(()=>{
        setLoading(false)
      }, 1000)
    }
  }, [socket, pathname])
  useEffect(()=>{
    if (socket){
      socket.on('connect', ()=>{
        console.log('[SOCKET] Connected to the server')
        setDisconnected(false)
      })
      socket.on('disconnect', ()=>{
        console.warn('[SOCKET] Disconnected from the server')
        setDisconnected(true)
      })
    }
    return ()=>{
      if (socket){
        socket.off('connect')
        socket.off('disconnect')
      }
    }
  }, [socket])
  return (
    <html lang="en">
      <head>
        <title>Sketchbook</title>
        <link rel="icon" href="/icon512_rounded.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.variable} style={{backgroundImage: `linear-gradient(45deg, ${theme.colors.brand[500]}, ${theme.colors.brand[400]})`, backgroundPosition: 'center'}}>
        <ChakraProvider theme={theme}>
          <MainContext.Provider value={{socket}}>
            <Image src={"/SjiBackground.png"} height={'100vh'} width={'100%'} objectFit={'cover'} objectPosition={'top-right'}/>
            <VStack position={'absolute'} top={0} left={0} zIndex={10} width={'100%'} height={'100vh'} overflow={'auto'} justifyContent={'center'} alignItems={'center'}>
              <AnimatePresence mode="wait">
                {disconnected && <Disconnected key={"disconnected"}/>}
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                {loading ? 
                  <Connecting key={'loader'}/>
                :
                  <VStack padding={pathname.startsWith("/dashboard/phone") && '0px 20px'} spacing={0} key="content" width={'100%'} height={'100vh'} overflow={'auto'} justifyContent={'center'} alignItems={'center'}>
                    {children}
                  </VStack>
                }
              </AnimatePresence>
            </VStack>
          </MainContext.Provider>
        </ChakraProvider>
      </body>
    </html>
  );
}
