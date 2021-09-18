import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ children, href, currentPath, ...props }: any) => (
  <NextLink href={href} passHref>
    <ChakraLink
      bg={href === "gray.700"}
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
      }}
      {...props}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;
