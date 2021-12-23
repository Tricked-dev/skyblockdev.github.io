import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Nav from "./nav";
import NextLink from "next/link";

import Footer from "./footer";
import { motion } from "framer-motion";

const langMeta = {
  en: {
    description: `Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev`,
  },
  nl: {
    description: `Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev`,
  },
};

export default function Container(props: any) {
  const { children, Links, TextValue, lang, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Tricked.pro",
    type: "website",
    themeColor: "#317EFB",
    keywords: "javascript typescript programming rust discord matrix",
    viewport: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
    icon: "favicon.ico",
    image: `/cards/${router.route.replace("/", "").replace(/\//gim, "_")}.png`,
    ...langMeta["en"],
    ...langMeta[lang as keyof typeof langMeta],
    ...customMeta,
  };

  return (
    <>
      <Head>
        <html lang={lang} />
        <title>{meta.title}</title>
        <meta name="msapplication-TileColor" content={meta.themeColor} />
        <link rel="canonical" href={`https://tricked.pro${router.asPath}`} />
        <meta name="viewport" content={meta.viewport} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="theme-color" content={meta.themeColor} />
        <meta name="description" content={meta.description} />
        <link rel="icon" href={meta.icon} type="image/ico" />
        <meta property="og:url" content={`https://tricked.pro${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <Nav links={Links} lang={lang} TextValue={TextValue} />
      <Box as="main" alignItems="stretch" maxW={"80rem"} margin="auto" padding={"4px 10px 40px"}>
        {children}
      </Box>
      <Footer lang={lang} />
    </>
  );
}
