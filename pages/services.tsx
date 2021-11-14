import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Center } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import { useState } from "react";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
import Container from "../components/container";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import Markdown from "../components/markdown";
import remarkHtml from "remark-html";

export default function Home() {
  return (
    <Container>
      <Center>
        <Text variant="h3" fontSize={"3xl"}>
          Services
        </Text>
      </Center>
      <Center>
        <Text variant="h3" fontSize={"larger"}>
          I make discord bots for monaro/etherium/bitcoin cash(preffered)
        </Text>
      </Center>
      <Text>Pricing is around 1 euro(in crypto) per command depending on the effort is required to make the command</Text>
      <Text>
        Dm <ChakraLink href="https://discord.com/users/336465356304678913">tricked#3777</ChakraLink> on discord if intrested or looking for more details
      </Text>
      <Text>I will not host the bot and it will be written in typescript using the discord.js api library</Text>
      <br />
      <Text textColor={"GrayText"}>I can also program other things in rust/typescript for a price decided in dms</Text>
    </Container>
  );
}
