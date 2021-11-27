import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Center, Wrap } from "@chakra-ui/react";
import Container from "../components/container";

export default function Services() {
  return (
    <Container>
      <Center>
        <Text variant="h3" fontSize={"3xl"}>
          Services
        </Text>
      </Center>
      <Box>
        <Center>
          <Text variant="h3" fontSize={"larger"} noOfLines={2}>
            <Wrap>
              <Text>I make discord bots for</Text>
              <Text color="green.500">monaro/etherium/bitcoin cash</Text>
            </Wrap>
          </Text>
        </Center>
      </Box>
      <br />
      <Box>
        <Text>Pricing is around 1 euro(in crypto) per command depending on the effort is required to make the command</Text>
        <Text>
          Dm{" "}
          <ChakraLink color="green.600" href="https://discord.com/users/336465356304678913">
            tricked#3777
          </ChakraLink>{" "}
          on discord for more info or offers!
        </Text>
        <Wrap>
          <Text color="red">I will not host the bot</Text>
          <Text> and it will be written in typescript using the discord.js api library</Text>
        </Wrap>
      </Box>
      <br />
      <Box>
        <Text textColor={"GrayText"}>I can also program other things in rust/typescript for a price decided in dms</Text>
      </Box>
    </Container>
  );
}
