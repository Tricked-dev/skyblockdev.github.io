import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { object, oneOfType, func, node } from "prop-types";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../api/theme";
import "../i18n/init";
import i18next from "i18next";
import Head from "next/head";
import "@fontsource/roboto";
function TrickedAPP({ Component, pageProps }: AppProps) {
  i18next.changeLanguage(pageProps.lang);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/assets/icons/icon-48x48.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/assets/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tricked" />
        <meta name="robots" content="follow, index" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
TrickedAPP.propTypes = {
  Component: oneOfType([node, func]),
  pageProps: object,
};
export default TrickedAPP;
