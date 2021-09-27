import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery, Button } from "@chakra-ui/react";
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
          <GridItem minH="3.4rem">
            <Text fontSize="6xl">Hey, I&apos;m tricked</Text>
            <Text fontSize="larger">
              I Am Typescript developer who mainly enjoys making discord bots using <a href="https://deno.land">Deno</a>, I do alot more though.
            </Text>
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Tools />
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Contacting />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
