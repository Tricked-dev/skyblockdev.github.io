import NextLink from "next/link";
import { Link as ChakraLink, Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
const Link = ({ children, href, currentPath, active, ...props }: any) => {
  const [expended, setExpended] = useState(false);
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        bg={href === "gray.700"}
        onMouseEnter={() => setExpended(true)}
        onMouseLeave={() => setExpended(false)}
        _hover={{
          textDecoration: "none",
          bg: "gray.700",
        }}
        {...props}
      >
        {children}
        <Center>
          <Box width={expended ? "100%" : "2rem"} maxW="100%" borderBottomWidth="4px" borderRadius="10px" borderBottomColor={active ? "brand.700" : "brand.600"} />
        </Center>
        {/* {!expended && <Box as={motion.div} data-isOpen={isOpen} initial={{ borderRadius: 50 }} borderBottomWidth="3px" borderBottomRadius="3px" borderBottomColor={active ? "brand.700" : "brand.600"}></Box>} */}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
