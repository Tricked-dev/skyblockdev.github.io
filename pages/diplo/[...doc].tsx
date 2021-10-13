import { getAllDocs, getDocBySlug } from "../../api/index";
import Container from "../../components/container";
// import { Box, Link, Wrap, Spacer, useMediaQuery } from "@chakra-ui/react";
import Markdown from "../../components/markdown";

import React, { ReactNode } from "react";
import { IconButton, Avatar, Box, CloseButton, Flex, HStack, VStack, Icon, useColorModeValue, Link, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";

import { ReactText } from "react";

interface LinkItemProps {
  name: string;
}

export function SidebarWithHeader({ children, LinkItems }: { children: ReactNode; LinkItems: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent LinkItems={LinkItems} onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent LinkItems={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  LinkItems: {
    url: string;
    title: string;
    slug: string;
  }[];
}

const SidebarContent = ({ onClose, LinkItems, ...rest }: SidebarProps) => {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} borderRight="1px" borderRightColor={useColorModeValue("gray.200", "gray.700")} w={{ base: "full", md: 60 }} pos="fixed" h="full" {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, y) => (
        <a href={`/diplo/${link.slug}`} key={y}>
          <NavItem>{link.title || link.slug}</NavItem>
        </a>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 4 }} alignItems="center" borderBottomWidth="1px" borderBottomColor={useColorModeValue("gray.200", "gray.700")} justifyContent={{ base: "space-between", md: "flex-end" }} {...rest}>
      <IconButton display={{ base: "flex", md: "none" }} onClick={onOpen} variant="outline" aria-label="open menu" icon={<FiMenu />} />
    </Flex>
  );
};

export default function Post({ title, content, description, docs }: any) {
  //   const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container title={`${title} | Diplo`} description={description} foceWidth={false}>
      <Box minH="100vh">
        <SidebarContent LinkItems={docs.filter((x: any) => !x.slug.endsWith(".md") && !x.slug.endsWith(".mdx"))} onClose={() => onClose} display={{ base: "none", md: "block" }} />
        <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
          <DrawerContent>
            <SidebarContent LinkItems={docs} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Box>
            <main>
              <article>
                <Box>
                  <Markdown content={content} />
                </Box>
                <br />
              </article>
            </main>
          </Box>
        </Box>
      </Box>
      );
      {/* <Box backgroundColor="gray.700" width="10rem" position={"sticky"}> */}
      {/* <Box as="ul" padding="3px" fontSize="1.2rem">
          {(docs as any[])
            .filter((x) => x.slug && !x.slug.endsWith("md"))
            .map((x, y) => (
              <li key={y}>
                <Link borderBottomColor="red" borderBottomWidth="3px" href={x.slug}>
                  {x.title || x.slug}
                </Link>
              </li>
            ))}
        </Box> */}
      {/* </Box> */}
      {/* <Spacer /> */}
    </Container>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      ...(await getDocBySlug(context.params.doc.join("/"))),
      docs: await getAllDocs(),
    },
  };
}

export async function getStaticPaths() {
  let paths: any = await getAllDocs();
  paths = paths.map((doc: any) => ({
    params: { doc: doc.slug.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
