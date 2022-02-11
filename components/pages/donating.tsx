/* eslint-disable jsx-a11y/alt-text */
import { Box, Wrap, Text, Image } from "@chakra-ui/react";
import i18next from "i18next";
import React from "react";

function donating() {
  return (
    <Box padding="10px">
      <Box className="prose prose-invert">
        <h1>Donating</h1>
        <p>
          You can sponsor me via github sponsers to support my work <a href="https://github.com/sponsors/Tricked-dev">https://github.com/sponsors/Tricked-dev</a>
        </p>
      </Box>
    </Box>
  );
}

export default donating;
