/* eslint-disable jsx-a11y/alt-text */
import { Box, Wrap, Text, Image } from "@chakra-ui/react";
import i18next from "i18next";
import React from "react";

function donating() {
  return (
    <Box padding="10px">
      <Box>
        <Box>
          <Text fontSize={"1.7rem"}>{i18next.t("donating")}</Text>
        </Box>
        <Box>
          <Wrap>
            <Image height="1rem" width="auto" src="/crypto/bitcoin-cash-bch-logo.png"></Image>
            <Text>BCH: bitcoincash:qz9gyruyyvtwcmevtcnyru8gudenqjqeug096e459m</Text>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <Image height="1rem" width="auto" src="/crypto/ethereum-eth-logo.png"></Image>
            <Text>ETH: 0xc31a1A5dCd1a4704e81fB7c9C3fa858b9A00C7fb</Text>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <Image height="1rem" width="auto" src="/crypto/monero-xmr-logo.png"></Image>
            <Text>XMR:</Text>
            <Text fontSize={"0.5rem"}>89prBkdG58KU15jv5LTbP3MgdJ2ikrcyu1vmdTKTGEVdhKRvbxgRN671jfFn3Uivk4Er1JXsc1xFZFbmFCGzVZNLPQeEwZc</Text>
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}

export default donating;
