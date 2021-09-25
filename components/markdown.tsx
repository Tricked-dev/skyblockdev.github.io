import { MDXRemote } from "next-mdx-remote";
import { Text, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";

const components = {
  ul: UnorderedList,
  li: ListItem,
  p: Text,
  code: ({ children, className }: any) => {
    return <code className={className.replace(/language-/g, "")}>{children}</code>;
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
      <head>
        <link href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`} rel="stylesheet" />
      </head>
      <MDXRemote {...content} components={components} />
    </>
  );
};
export default Markdown;
