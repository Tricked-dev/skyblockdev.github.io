import * as React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Container } from "@chakra-ui/react";
import Link from "next/link";
import SkipNavLink from "./skipNavLink";
import Logo from "./logo";
import ColorModeToggle from "./colorModeToggle";

const NavLink = ({ href, ...props }: any) => (
  <Link href={href} passHref>
    <Link {...props} />
  </Link>
);

const Nav = ({ ...props }) => {
  const { pathname } = useRouter();

  return (
    <Box as="nav" className="bg-white dark:bg-black shadow-lg">
      <Container
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <SkipNavLink className="flex items-center py-4 px-2" /> */}

        {/* <Logo className="flex items-center py-4 px-2" /> */}

        <Flex sx={{ alignItems: "center" }}>
          <Flex as="ul">
            <li>
              <NavLink href="/" aria-current={pathname === "/" ? "page" : null} mr={[1, 2]}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink href="#projects" aria-current={pathname.includes("/projects") ? "page" : null} mr={[1, 2]}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink href="#posts" aria-current={pathname.includes("/blog") ? "page" : null}>
                Blog
              </NavLink>
            </li>
          </Flex>

          <ColorModeToggle ml={[2, 3]} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
