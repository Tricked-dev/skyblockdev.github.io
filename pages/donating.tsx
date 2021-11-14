/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Button } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import { useState } from "react";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
import Container from "../components/container";
import QRCode from "react-qr-code";
import { MdSend } from "react-icons/md/index";

export default function Home() {
  const [expended, setExpended] = useState(false);
  return (
    <Container>
      <Box padding="10px">
        <Text>
          <Button rel="noopener noreferrer" target="_blank" as="a" href="monero:89prBkdG58KU15jv5LTbP3MgdJ2ikrcyu1vmdTKTGEVdhKRvbxgRN671jfFn3Uivk4Er1JXsc1xFZFbmFCGzVZNLPQeEwZc?tx_description=Donate%20to%20tricekd&recipient_name=tricked" leftIcon={<MdSend />}>
            Donate XMR
          </Button>
          <Button onClick={() => setExpended(!expended)}>Expand Adress</Button>
          {expended && (
            <Text>
              <pre>
                <code>89prBkdG58KU15jv5LTbP3MgdJ2ikrcyu1vmdTKTGEVdhKRvbxgRN671jfFn3Uivk4Er1JXsc1xFZFbmFCGzVZNLPQeEwZc</code>
              </pre>
            </Text>
          )}
        </Text>

        <QRCode value="monero:89prBkdG58KU15jv5LTbP3MgdJ2ikrcyu1vmdTKTGEVdhKRvbxgRN671jfFn3Uivk4Er1JXsc1xFZFbmFCGzVZNLPQeEwZc?tx_description=Donate%20to%20tricekd&recipient_name=tricked"></QRCode>
      </Box>
      <Box padding="10px">
        <Text>Donate ETH 0xc31a1A5dCd1a4704e81fB7c9C3fa858b9A00C7fb</Text>
        <img src="/eth.png"></img>
      </Box>
    </Container>
  );
}
