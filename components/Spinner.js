import { CircularProgress } from "@chakra-ui/react";

export default function Spinner({value, size}){
    return <CircularProgress size={size || '50px'} value={value} thickness={'7px'} capIsRound isIndeterminate={!value} color='brand.500' />
}