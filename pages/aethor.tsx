import Container from "../components/aethainer";
import { Box, Text, Button, GridItem, SimpleGrid } from "@chakra-ui/react";

import NextLink from "next/link";
const offline = () => {
  return (
    <Container>
      <SimpleGrid columns={3} alignContent="center" alignItems="center" justifyItems="center">
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
        <Text></Text>
      </SimpleGrid>
    </Container>
  );
};
export default offline;
