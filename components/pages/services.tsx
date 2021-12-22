import { Center, Box, Wrap, Text, Link } from "@chakra-ui/react";
import i18next from "i18next";
import React from "react";

function services() {
  return (
    <>
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
          <Link color="green.600" href="https://discord.com/users/336465356304678913">
            tricked#3777
          </Link>{" "}
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
    </>
  );
}

export default services;
