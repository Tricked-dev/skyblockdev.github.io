import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import { useState } from "react";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
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
            <Text fontSize="larger">I am Typescript/React developer</Text>
            <Text color={useColorModeValue("graytext", "telegram.100")}>My biggest project is Aethor a discord bot made using deno and typescript it allows you to make suggestion channels and much more</Text>
            {/* <Text color="GrayText">
              I also made a image uploader using Fastify and NodeJs almost sure its the fastest image uploader out there you can find my other projects{" "}
              <ChakraLink color="blue.400">
                <Link passHref href="/projects">
                  here
                </Link>
              </ChakraLink>
            </Text> */}
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
