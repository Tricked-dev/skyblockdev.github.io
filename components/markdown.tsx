import { MDXRemote } from "next-mdx-remote";
import { Text, Link, ListItem, UnorderedList, Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/prism";
const components = {
  ul: UnorderedList,
  li: ListItem,
  p: Text,
  Center: Center,
  gray: ({ children, className }: any) => {
    return <Text color={"GrayText"}>{children}</Text>;
  },
  code: ({ children, className }: any) => {
    return (
      <SyntaxHighlighter
        style={agate}
        customStyle={{
          backgroundColor: "none",
          borderRadius: 4,
          fontSize: 13,
          marginBottom: "1em",
          marginTop: "1em",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        language={className?.replace(/language-/g, "")}
      >
        {children}
      </SyntaxHighlighter>
    );
  },
  a: ({ children, href }: any) => {
    return (
      <Link color="green.300" href={href}>
        <Text as="u">{children}</Text>
      </Link>
    );
  },
  h4: ({ children }: any) => {
    return (
      <Text variant={"h4"} fontSize="large">
        {children}
      </Text>
    );
  },
  h3: ({ children }: any) => {
    return (
      <Text variant={"h3"} fontSize="x-large">
        {children}
      </Text>
    );
  },
  h2: ({ children }: any) => {
    return (
      <Text variant={"h2"} fontSize="2xl">
        {children}
      </Text>
    );
  },
  h1: ({ children }: any) => {
    return (
      <Text variant={"h1"} fontSize="3xl">
        {children}
      </Text>
    );
  },
};
const Markdown = ({ content }: any) => {
  return (
    <>
      <Box>
        <MDXRemote {...content} components={components} />
      </Box>
    </>
  );
};
export default Markdown;
