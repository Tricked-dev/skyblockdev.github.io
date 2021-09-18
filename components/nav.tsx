// import * as React from "react";
// import { useRouter } from "next/router";
// import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
// import Link from "next/link";
// import SkipNavLink from "./skipNavLink";
// import Logo from "./logo";
// import ColorModeToggle from "./colorModeToggle";

// const NavLink = ({ href, ...props }: any) => (
//   <Link href={href} passHref>
//     <Link {...props} />
//   </Link>
// );

// const Nav = ({ ...props }) => {
//   const { pathname } = useRouter();

//   return (
//     <div className="container max-w-4xl mx-auto">
//       <Box as="nav" className="z-10 flex justify-between mt-8 mb-2 md:mb-4 lg:mb-6">
//         <div className="flex flex-row items-center" id="nav-content">
//           <Text>Tricked.pro</Text>

//           <Box className="menu-btn-lg cursor-pointer">
//             <NavLink href="/" aria-current={pathname === "/" ? "page" : null} mr={[1, 2]}>
//               Home
//             </NavLink>
//           </Box>

//           <Box className="menu-btn-lg cursor-pointer">
//             <NavLink href="#projects" aria-current={pathname.includes("/#projects") ? "page" : null} mr={[1, 2]}>
//               Projects
//             </NavLink>
//           </Box>

//           <Box className="menu-btn-lg cursor-pointer">
//             <NavLink href="#posts" aria-current={pathname.includes("/#posts") ? "page" : null}>
//               Blog
//             </NavLink>
//           </Box>
//         </div>

//         <ColorModeToggle ml={[2, 3]} className="w-10 h-10 p-3 ml-4 bg-gray-100 rounded-lg dark:bg-gray-50" />
//       </Box>
//     </div>
//   );
// };

// export default Nav;
import { Box, Flex, HStack, IconButton, useColorMode, Button, useDisclosure, Stack, Container } from "@chakra-ui/react";
import Link from "./Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Posts",
    route: "/#posts",
  },
  {
    name: "Projects",
    route: "/#projects",
  },
];

// const extraLinks = [
//   {
//     name: "Books",
//     route: "/books",
//   },
//   {
//     name: "Blog",
//     route: "/blog",
//   },
// ];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  //   let router = useRouter();
  //   let { asPath } = router;

  const navigationItem = (
    <>
      {Links.map((link) => (
        <Link href={link.route} key={link.name} p={2} rounded={"md"}>
          {link.name}
        </Link>
      ))}
      {/* <DropdownMenu currentPath={asPath} extraLinks={extraLinks} /> */}
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
