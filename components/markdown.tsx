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

let delay = 0.0;

export function FadeInWhenVisible({ type, children, ...props }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  //@ts-ignore -
  let Component = motion[type];
  console.log(type);
  if (delay > 0.1) {
    delay += 0.01;
  } else {
    delay += 0.1;
  }
  return (
    <Component
      {...props}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ type: "spring", damping: 10, stiffness: 100, duration: 0.3, delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </Component>
  );
}

function comp(name: any) {
  return ({ children, ...props }: any) => (
    <FadeInWhenVisible type={name} {...props}>
      {children}
    </FadeInWhenVisible>
  );
}

const components = {
  ul: comp("ul"),
  li: comp("li"),
  p: comp("p"),
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
  a: comp("a"),
  h4: comp("h4"),
  h3: comp("h3"),
  h2: comp("h4"),
  h1: comp("h1"),
  th: comp("th"),
  tb: comp("tb"),
  td: comp("td"),
};
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
