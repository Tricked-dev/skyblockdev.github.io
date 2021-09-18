import * as React from "react";
import { useRouter } from "next/router";
import { default as NextLink } from "next/link";
import { Box, Flex, Container } from "@chakra-ui/react";
import Link from "next/link";

import SkipNavLink from "./skipNavLink";
import Logo from "./logo";
import ColorModeToggle from "./colorModeToggle";

const NavLink = ({ href, ...props }: any) => (
  <NextLink href={href} passHref>
    <Link {...props} />
  </NextLink>
);

const Nav = ({ sx, ...props }) => {
  const { pathname } = useRouter();

  return (
    <Box
      as="nav"
      sx={{
        borderTop: 4,
        borderColor: "primary",
        paddingTop: [4, null, 5],
        ...sx,
      }}
      {...props}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SkipNavLink />

        <Logo />

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
