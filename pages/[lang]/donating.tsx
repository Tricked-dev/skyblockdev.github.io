/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Button, Image, Wrap } from "@chakra-ui/react";
import { readFile } from "fs/promises";
import { join } from "path";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import type { NextJsData } from "^api/types";
import Container from "^components/container";
import i18next from "i18next";
import Donating from "^components/pages/donating";

export default function Home({ lang }: NextJsData) {
  return (
    <Container lang={lang}>
      <Donating />
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
