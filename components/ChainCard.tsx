import { Flex } from "@chakra-ui/react";
import { chainDataDeets } from "../types";

export default function ChainCard(chainDetails: chainDataDeets) {

    if (chainDetails){
        return (
          <Flex>{chainDetails.chainName}</Flex>
        )
    }
    else {
        return (<></>)
    }
}


