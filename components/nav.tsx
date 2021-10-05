import { Box, Flex, HStack, IconButton, Button, useColorMode, Text, useDisclosure, Stack, Container } from "@chakra-ui/react";
import Link from "./Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

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
  {
    name: "Aethor",
    route: "/aethor",
  },
];

const Navbar = ({ links = Links, TextValue = "Tricked.pro" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const navigationItem = (
    <>
      {links.map((link) => (
        <Link href={link.route} active={router.pathname == link.route} key={link.name} p={2} rounded={"md"}>
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <Box py={5} borderTop="2px" borderTopColor="green.500">
        <Container maxW="container.lg">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: !isOpen ? "none" : "inherit" }} onClick={isOpen ? onClose : onOpen} />
            <HStack spacing={8} alignItems={"center"}>
              <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                <Text>
                  <b>{TextValue}</b>
                </Text>

                {navigationItem}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} mt={3}>
              <Stack as={"nav"} spacing={4}>
                {navigationItem}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
