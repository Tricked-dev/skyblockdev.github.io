import { Box, Text, Grid, GridItem, SimpleGrid, useColorModeValue, Link as ChakraLink, Center, Wrap } from "@chakra-ui/react";
import Container from "^components/container";
import type { NextJsData } from "^api/types";
import { readFile } from "fs/promises";
import { basename, join } from "path";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import i18next from "i18next";
export default function Services({ lang }: NextJsData) {
  return (
    <Container lang={lang}>
      <Center>
        <Text variant="h3" fontSize={"3xl"}>
          {i18next.t("services")}
        </Text>
      </Center>
      <Box>
        <Center>
          <Text variant="h3" fontSize={"larger"} noOfLines={2}>
            <Wrap>
              <Text>{i18next.t("make_bots")}</Text>
              <Text color="green.500">monaro/etherium/bitcoin cash</Text>
            </Wrap>
          </Text>
        </Center>
      </Box>
      <br />
      <Box>
        <Text>{i18next.t("pricing")}</Text>
        <Text>
          Dm{" "}
          <ChakraLink color="green.600" href="https://discord.com/users/336465356304678913">
            tricked#3777
          </ChakraLink>{" "}
          {i18next.t("on_discord")}
        </Text>
        <Wrap>
          <Text color="red"> {i18next.t("not_host")}</Text>
          <Text> {i18next.t("written")}</Text>
        </Wrap>
      </Box>
      <br />
      <Box>
        <Text textColor={"GrayText"}>{i18next.t("program_other")}</Text>
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
