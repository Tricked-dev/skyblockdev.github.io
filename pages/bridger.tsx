import { serialize } from "next-mdx-remote/serialize";
import Markdown from "../components/markdown";
import Container from "../components/container";
import { highlightAll } from "prismjs";
import { useEffect } from "react";
import fetch from "isomorphic-fetch";
import remarkHtml from "remark-html";
import remarkprism from "remark-prism";
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
      content: await serialize(
        (
          await fetch("https://raw.githubusercontent.com/SkyBlockDev/bridgebot/main/README.md").then((r: any) => r.text())
        )
          //   .replace(/.\//gim, "https://raw.githubusercontent.com/SkyBlockDev/bridgebot/main/")

          .replace(/\images/gim, "https://raw.githubusercontent.com/SkyBlockDev/bridgebot/main/images")
          .replace("./LICENSE", "https://github.com/SkyBlockDev/bridgebot/blob/main/LICENSE")
          .replace(/language-/gim, ""),
        {
          mdxOptions: {
            remarkPlugins: [remarkprism, remarkHtml],
          },
        }
      ),
    },
  };
}
export default Bridger;
