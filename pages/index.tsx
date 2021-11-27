import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <Box>
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem minH="3.4rem" margin="auto" paddingBottom="40px">
            <Text fontSize="6xl" color="brand.100">
              Hey, I&apos;m tricked
            </Text>
            <Text fontSize="larger">I am a Typescript and Rust developer</Text>
            <Text color={useColorModeValue("graytext", "telegram.100")}>
              Im currently maintaing <Link href="https://github.com/Tricked-dev/diplo">Diplo</Link> a script runner and dependency manager for deno made in rust.
            </Text>
            <Box>
              <Text>
                <ChakraLink href="/services">Programming Services</ChakraLink>
              </Text>
            </Box>
          </GridItem>

          <GridItem paddingBottom="40px">
            <Tools />
          </GridItem>
          <GridItem>
            <Contacting />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
