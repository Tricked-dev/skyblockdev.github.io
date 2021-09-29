import Container from "../components/aethainer";
import { Box, Text, Button, GridItem, SimpleGrid } from "@chakra-ui/react";

import NextLink from "next/link";
const offline = () => {
  return (
    <Container>
      <SimpleGrid columns={3} alignContent="center" alignItems="center" justifyItems="center" paddingTop="4rem" paddingBottom="6rem" gridGap="3rem">
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}>
          <Text fontSize="3xl" as="h1" className="font-bold">
            AETHOR
          </Text>
        </GridItem>

        <GridItem colSpan={1}></GridItem>
        {/* <Spacer /> */}
        <GridItem>
          <NextLink href="/aethor/invite" passHref>
            <Button>Invite</Button>
          </NextLink>
        </GridItem>

        <GridItem>
          <NextLink href="/aethor/support" passHref>
            <Button>Support</Button>
          </NextLink>
        </GridItem>
        <GridItem>
          <NextLink href="/aethor/general" passHref>
            <Button>Commands</Button>
          </NextLink>
        </GridItem>
        <GridItem colSpan={3}>
          <Text as={"article"} className="bold-text" fontSize="larger">
            <Text>Aethor is a discord bot that aims to have unique features that other bots dont have for example suggestions using buttons and a wide arrange of commands to help manage suggestions</Text>
            <br />
            <Text>Aethor also has features to keep support channels clean by making a thread on each message in a support channels</Text>
            <br />
            <Text>So what are you waiting for get aethor now!</Text>
          </Text>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
export default offline;
