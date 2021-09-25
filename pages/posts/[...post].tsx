import { getPostBySlug, getAllPosts } from "../../api/index";
import Container from "../../components/container";
import { Box, Text } from "@chakra-ui/react";
import Markdown from "../../components/markdown";
import Head from "next/head";
export default function Post({ title, content, description, published }: any) {
  return (
    <Container title={`${title} | Tricked.pro`} description={description}>
      <Box variant={"elevation"} shadow="md">
        <main>
          <article>
            {published && <Text color="GrayText">Published {published}</Text>}
            <Box margin="auto" justifyContent="center" marginRight="auto" marginLeft="auto" maxW="60rem" className="posts">
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
  return {
    props: await getPostBySlug(context.params.post.join("/")),
  };
}

export async function getStaticPaths() {
  let paths: any = await getAllPosts();
  paths = paths.map((post: any) => ({
    params: { post: post.slug.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
