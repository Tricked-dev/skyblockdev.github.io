import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { object, oneOfType, func, node } from "prop-types";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../api/theme";
import "../i18n/init";
import i18next from "i18next";
function TrickedAPP({ Component, pageProps }: AppProps) {
  i18next.changeLanguage(pageProps.lang);
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
