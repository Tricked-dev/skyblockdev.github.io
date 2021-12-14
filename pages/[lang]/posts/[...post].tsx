import { getPostBySlug, getAllPosts } from "^api/index";
import Container from "^components/container";
import { Box, Text } from "@chakra-ui/react";
import Markdown from "^components/markdown";
import Head from "next/head";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
export default function Post({ title, content, description, published, lang }: any) {
  return (
    <Container title={`${title} | Tricked.pro`} description={description} lang={lang}>
      <Box variant={"elevation"} shadow="md">
        <main>
          <article>
            <Box margin="auto" justifyContent="center" marginRight="auto" marginLeft="auto" maxW="60rem" className="posts">
              {published && <Text color="GrayText">Published {published}</Text>}
              <Markdown content={content} />
            </Box>
            <br />
          </article>
        </main>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context: any) {
  const language = getLanguage(context.params.lang);
  return {
    props: { ...(await getPostBySlug(context.params.lang, context.params.post.join("/"))), lang: language },
  };
}

export async function getStaticPaths() {
  let paths: any = [...(await getAllPosts("nl")), ...(await getAllPosts("en"))];
  const langs = getAllLanguageSlugs();
  paths = paths.map((post: any) => ({
    params: { post: post.slug.split("/") },
  }));

  let newPaths = [];
  for (let path of paths) {
    for (let lang of langs) {
      newPaths.push({ params: { ...path.params, ...lang.params } });
    }
  }

  return {
    paths: newPaths,
    fallback: false,
  };
}
