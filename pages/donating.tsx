/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Button, Image, Wrap } from "@chakra-ui/react";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <Box padding="10px">
        <Box>
          <Box>
            <Text fontSize={"1.7rem"}>You can donate to me using any of the crypto adresses</Text>
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
    </Container>
  );
}
