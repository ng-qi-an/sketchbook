import { CircularProgress } from "@chakra-ui/react";

export default function Spinner(props){
    return <CircularProgress size={props.size || '50px'} value={props.value} thickness={'7px'} capIsRound isIndeterminate={!props.value} color='brand.500' {...props} />
}