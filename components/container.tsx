import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Nav from "./nav";
import NextLink from "next/link";

import Footer from "./footer";

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, Links, TextValue, DontforceWidth = false, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Tricked.pro",
    description: `Typescript/javscript developer from the netherlands`,
    type: "website",
    themeColor: "#317EFB",
    keywords: "javascript typescript programming discord matrix",
    viewport: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
    icon: "favicon.ico",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>

        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="msapplication-TileColor" content={meta.themeColor} />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/assets/icons/icon-48x48.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/assets/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png"></link>
        <link rel="canonical" href={`https://tricked.pro${router.asPath}`} />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content={meta.viewport} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="theme-color" content={meta.themeColor} />

        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href={meta.icon} type="image/ico" />
        <meta property="og:url" content={`https://tricked.pro${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tricked" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <Nav links={Links} TextValue={TextValue} />

      <main>
        <Box alignItems="stretch" maxW={!DontforceWidth ? "50rem" : "none"} margin="auto" padding={!DontforceWidth ? "4px 10px 40px" : "none"}>
          {children}
        </Box>
      </main>
      <Footer />
    </div>
  );
}
