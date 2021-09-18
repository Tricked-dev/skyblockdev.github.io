import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { object, oneOfType, func, node } from "prop-types";
import * as React from "react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";

function TrickedAPP({ Component, pageProps }: AppProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: colorMode === "light" ? "light" : "dark",
        },
      }),
    [colorMode]
  );
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: theme.palette.background.paper, minHeight: "100vh", width: "100%", height: "100%" }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}
TrickedAPP.propTypes = {
  Component: oneOfType([node, func]),
  pageProps: object,
};
export default TrickedAPP;
