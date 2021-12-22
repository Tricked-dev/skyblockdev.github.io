import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Contacting from "^components/contacting";
import Tools from "^components/tools";
import Container from "^components/container";
import { readFile } from "fs/promises";
import { basename, join } from "path";
import type { NextJsData } from "^api/types";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import i18next from "i18next";
import Index from "^components/pages/index";

export default function Home({ lang }: NextJsData) {
  return (
    <Container lang={lang} className="w-full">
      <Index lang={lang} />
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
