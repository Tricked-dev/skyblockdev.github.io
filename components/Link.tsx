import NextLink from "next/link";
import { Link as ChakraLink, Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
const Link = ({ children, href, currentPath, lang = "en", ...props }: any) => {
  let router = useRouter();
  let [path, des] = [router.asPath.endsWith("/") ? router.asPath : `${router.asPath}/`, `/${lang}${href}`.endsWith("/") ? `/${lang}${href}` : `/${lang}${href}/`];
  let active = path === des;
  return (
    <NextLink passHref prefetch={false} href={`/[lang]${href}`} as={`/${lang}${href}`}>
      <ChakraLink fontSize={"larger"} p="3" rounded={"md"} borderBottom={"4px"} borderBottomColor={active ? "green.600" : "gray.600"} roundedBottom={"none"} borderRadius={"none"} className="hover:bg-gray-700" {...props}>
        {children}

        {/* {!expended && <Box as={motion.div} data-isOpen={isOpen} initial={{ borderRadius: 50 }} borderBottomWidth="3px" borderBottomRadius="3px" borderBottomColor={active ? "brand.700" : "brand.600"}></Box>} */}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
