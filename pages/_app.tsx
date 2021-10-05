import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { object, oneOfType, func, node } from "prop-types";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../api/theme";

function TrickedAPP({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
TrickedAPP.propTypes = {
  Component: oneOfType([node, func]),
  pageProps: object,
};
export default TrickedAPP;
