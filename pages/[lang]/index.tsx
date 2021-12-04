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

export default function Home({ lang }: NextJsData) {
  return (
    <Container lang={lang}>
      <Box width="100%">
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem minH="3.4rem" paddingBottom="40px">
            <Text fontSize="6xl" color="brand.100">
              {i18next.t("hey_im")}
            </Text>
            <Text fontSize="larger">{i18next.t("developer")}</Text>
            <Text color={useColorModeValue("graytext", "telegram.100")}>{i18next.t("maintaining")}</Text>
            <Box paddingTop={"5px"}>
              <Text paddingTop={"5px"}>
                <Link passHref={true} href="/[lang]/services" as={`/${lang}/services`}>
                  <ChakraLink>
                    {"> "} {i18next.t("services")}
                  </ChakraLink>
                </Link>
              </Text>
              <Text paddingTop={"5px"}>
                <Link passHref={true} href="/[lang]" as={`/${lang == "en" ? "nl" : "en"}`}>
                  <ChakraLink color="green.600">
                    {"> "} {i18next.t("change_lang")}
                  </ChakraLink>
                </Link>
              </Text>
            </Box>
            <Box></Box>
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
