/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Button, Image, Wrap } from "@chakra-ui/react";
import { readFile } from "fs/promises";
import { join } from "path";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import type { NextJsData } from "^api/types";
import Container from "^components/container";
import i18next from "i18next";

export default function Home({ lang }: NextJsData) {
  return (
    <Container lang={lang}>
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
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      lang: language,
    },
  };
}
