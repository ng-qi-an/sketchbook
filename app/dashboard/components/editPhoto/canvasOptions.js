'use client';

import { Circle, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack } from "@chakra-ui/react";

export default function CanvasOptions({eraserWidth, setEraserWidth, eraseMode, setEraseMode, strokeColor, setStrokeColor, mobile}){
    const colors = ['var(--chakra-colors-black)', 'var(--chakra-colors-white)', 'var(--chakra-colors-red-500)', 'var(--chakra-colors-orange-500)', 'var(--chakra-colors-green-500)', 'var(--chakra-colors-blue-500)', 'var(--chakra-colors-purple-500)', 'var(--chakra-colors-pink-500)']

    return eraseMode ? 
        <Slider
            aria-label='slider-ex-3'
            size="lg"
            value={eraserWidth}
            onChange={(e)=>{
                setEraserWidth(e)
            }}
            orientation={mobile ? 'horizontal' : 'vertical'}
            colorScheme={'brand'}
            min={5}
            max={50}
            h={!mobile && '300px'}
            w={mobile && '300px'}
        >
            <SliderTrack w={mobile ? null : '5px'} h={mobile ? '5px' : null}>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
        :
            colors.map((color)=>{
                return <VStack onClick={()=> {setStrokeColor(color)}} w={'42px'} h={'42px'} justifyContent={'center'}>
                    <Circle border={color == 'var(--chakra-colors-white)' && 'solid 1px black'} transition={'ease-in-out all 0.2s'} transform={strokeColor == color ? 'scale(1)' : 'scale(0.8)'} bg={color} w={'32px'} h={'32px'} rounded={'full'}/>
                </VStack>
            })
}