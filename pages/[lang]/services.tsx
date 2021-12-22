import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Center, Wrap } from "@chakra-ui/react";
import Container from "^components/container";
import type { NextJsData } from "^api/types";
import { readFile } from "fs/promises";
import { basename, join } from "path";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import i18next from "i18next";
import Servicess from "^components/pages/services";
export default function Services({ lang }: NextJsData) {
  return (
    <Container lang={lang}>
      <Servicess />
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
