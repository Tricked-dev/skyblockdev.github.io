import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { object, oneOfType, func, node } from "prop-types";
import * as React from "react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";

function TrickedAPP({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div style={{ minHeight: "100vh", width: "100%", height: "100%" }} className="bg-white dark:bg-black">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
TrickedAPP.propTypes = {
  Component: oneOfType([node, func]),
  pageProps: object,
};
export default TrickedAPP;
