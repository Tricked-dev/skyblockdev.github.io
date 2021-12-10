import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export default function WithChakra(Component: any) {
  return function (args: any) {
    return (
      //@ts-ignore - cry about it
      <ChakraProvider theme={theme} resetCSS={false}>
        <Component {...args} />
      </ChakraProvider>
    );
  };
}
