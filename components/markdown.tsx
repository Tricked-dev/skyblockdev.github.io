/* eslint-disable react/display-name */
import { MDXRemote } from "next-mdx-remote";
import { Text, Link, ListItem, UnorderedList, Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ClassNames } from "@emotion/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { comp } from "./fadeUtils";

const components: Record<string, any> = {
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
};
for (const item of ["ul", "li", "a", "p", "h4", "h3", "h2", "h1", "th", "tb", "td"]) {
  components[item] = comp(item);
}
const Markdown = ({ content }: any) => {
  if (content.compiledSource == "") return <></>;
  return (
    <>
      <Box className="prose dark:prose-invert">
        <MDXRemote {...content} components={components} />
      </Box>
    </>
  );
};
export default Markdown;
