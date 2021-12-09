import { Text as ChakraText } from "@chakra-ui/react";
import WithChakra from "./withChakra";

const Text = ({ children, ...args }) => {
  return <ChakraText {...args}>{children}</ChakraText>;
};
export default WithChakra(Text);
