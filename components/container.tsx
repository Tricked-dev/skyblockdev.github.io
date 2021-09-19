import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Nav from "./nav";
import NextLink from "next/link";

import Footer from "./footer";

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Tricked",
    description: `Typescript/javscript developer`,
    // image: "https://tricked.pro/",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://tricked.pro${router.asPath}`} />
        <link rel="canonical" href={`https://tricked.pro${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Tricked" />
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
      <Nav />
      {/* <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100"></nav> */}
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <Footer />
      </main>
    </div>
  );
}
