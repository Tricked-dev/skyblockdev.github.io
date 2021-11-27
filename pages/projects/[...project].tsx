import { getPostBySlug, getAllPosts, getAllProjects, getProjectBySlug } from "../../api/index";
import Container from "../../components/container";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import Markdown from "../../components/markdown";
import Head from "next/head";
import { useState } from "react";
export default function Post({ title, readme, name, content, image, description, published }: any) {
  return (
    <Container title={`${name} | Tricked.pro`} description={description}>
      <Box variant={"elevation"} shadow="md">
        <main>
          <Text fontSize={"xl"}>{name}</Text>
          <Image src={`/images/${image}`} width="10rem" height="auto" alt=""></Image>
          <article>
            {published && <Text color="GrayText">Published {published}</Text>}
            <Box margin="auto" justifyContent="center" marginRight="auto" marginLeft="auto" maxW="60rem" className="posts">
              <Markdown content={content} />
            </Box>
          </article>
          <Button as="a" href="/projects">
            Back?
          </Button>
        </main>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context: any) {
  let data = JSON.parse(JSON.stringify(await getProjectBySlug(context.params.project.join("/"))));
  if (data.github) {
    // data.readme = await markdownToHtml(await fetch(`https://raw.githubusercontent.com/${data.github}/master/README.md`).then((r) => r.text()));
  }
  return {
    props: { ...data },
  };
}

export async function getStaticPaths() {
  let paths: any = await getAllProjects();
  paths = paths.map((post: any) => ({
    params: { project: post.slug.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
