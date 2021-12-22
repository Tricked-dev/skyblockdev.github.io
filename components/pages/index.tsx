import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import i18next from "i18next";
import Link from "next/link";
import React from "react";
import Contacting from "../contacting";
import { Text, Link as ChakraLink } from "@chakra-ui/react";
import Tools from "../tools";
import { comp } from "../fadeUtils";

function index({ lang }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let color = useColorModeValue("graytext", "telegram.100");
  return (
    <Box width="100%">
      <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
        <GridItem minH="3.4rem" paddingBottom="40px" w="80rem" maxW={"100vw"} as={comp("div")}>
          <Text fontSize="6xl" color="brand.100">
            {i18next.t("hey_im")}
          </Text>
          <Text fontSize="larger">{i18next.t("developer")}</Text>
          <Text color={color}>{i18next.t("maintaining")}</Text>
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

        <GridItem paddingBottom="40px" as={comp("div")}>
          <Tools />
        </GridItem>
        <GridItem as={comp("div")}>
          <Contacting />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default index;
