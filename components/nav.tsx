import { Box, Flex, HStack, IconButton, Button, useColorMode, Text, useDisclosure, Stack, Container, DarkMode } from "@chakra-ui/react";
import Link from "./Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Posts",
    route: "/posts",
  },
  // {
  //   name: "Aethor",
  //   route: "/aethor",
  // },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = ({ links = Links, lang = "en", TextValue = "Tricked.pro" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode: SetToggleColorMode } = useColorMode();
  const router = useRouter();
  const navigationItem = (
    <>
      {links.map((link) => (
        <Link lang={lang} href={link.route} active={router.pathname == link.route} key={link.name}>
          {link.name}
        </Link>
      ))}
    </>
  );
  useEffect(() => {
    if (window.document)
      if (colorMode == "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
  });
  function toggleColorMode() {
    SetToggleColorMode();
    localStorage.theme = colorMode;
    if (colorMode == "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <>
      <Box as={DarkMode} borderTop="2px" borderTopColor="green.500" width="100%" bg="gray.900" py="1">
        {/* <Container maxW="container.lg"> */}
        <Flex alignItems={"center"} justifyContent={"space-between"} py="1" px="5">
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: !isOpen ? "none" : "inherit" }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              <Text fontSize={"large"}>
                <b>{TextValue}</b>
              </Text>

              {navigationItem}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button as={motion.div} whileHover={{ scale: 1.2, rotate: -20 }} whileTap={{ scale: 0.3, rotate: -360 }} aria-label="Switch Theme" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box>
            <Stack pt="2" as={"nav"} spacing={4}>
              {navigationItem}
            </Stack>
          </Box>
        ) : null}
        {/* </Container> */}
      </Box>
    </>
  );
};

export default Navbar;
