import { serialize } from "next-mdx-remote/serialize";
import Markdown from "^components/markdown";
import Container from "^components/container";
import { highlightAll } from "prismjs";
import { useEffect } from "react";
import fetch from "isomorphic-fetch";
import remarkHtml from "remark-html";
import { transform } from "^api/index";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
// import remarkprism from "remark-prism";
const Bridger = ({ content, lang }: any) => {
  return (
    <Container lang={lang}>
      <Markdown content={content} />
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      lang: language,
      content: await transform(
        (
          await fetch("https://raw.githubusercontent.com/Tricked-dev/bridgebot/main/README.md?token=ARH4DU7U5LEXMDZMCR457JDBUOJN2").then((r: any) => r.text())
        )
          .replace(/images/gim, "https://raw.githubusercontent.com/Tricked-dev/bridgebot/main/images")
          .replace("./LICENSE", "https://github.com/Tricked-dev/bridgebot/blob/main/LICENSE")
          .replace(/language-/gim, "")
      ),
    },
  };
}

export default Bridger;
