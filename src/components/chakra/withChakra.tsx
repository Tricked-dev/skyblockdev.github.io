import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#0652DD",

      900: "1a202c",
      800: "1a202c",
      700: "#1B1464",
      600: "#006266",
      500: "1a202c",
      400: "1a202c",
      300: "1a202c",
      200: "#C4E538",
    },
  },
});

export default function WithChakra(Component: any) {
  return function (args: any) {
    return (
      //@ts-ignore - cry about it
      <ChakraProvider theme={theme}>
        <Component {...args} />
      </ChakraProvider>
    );
  };
}
