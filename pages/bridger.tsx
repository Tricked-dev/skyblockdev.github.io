import { serialize } from "next-mdx-remote/serialize";
import Markdown from "../components/markdown";
import Container from "../components/container";
import { highlightAll } from "prismjs";
import { useEffect } from "react";
import fetch from "isomorphic-fetch";
import remarkHtml from "remark-html";
import { transform } from "../api/index";
// import remarkprism from "remark-prism";
const Bridger = ({ content }: any) => {
  return (
    <Container>
      <Markdown content={content} />
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
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
