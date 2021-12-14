import { getPostBySlug, getAllPosts, getAllProjects, getProjectBySlug } from "^api/index";
import Container from "^components/container";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import Markdown from "^components/markdown";
import Head from "next/head";
import { useState } from "react";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import NextLink from "next/link";
export default function Post({ title, readme, name, content, image, description, published, lang }: any) {
  return (
    <Container title={`${name} | Tricked.pro`} description={description} lang={lang}>
      <Box variant={"elevation"} shadow="md" marginRight="auto" marginLeft="auto" maxW="50rem">
        <main>
          <Text fontSize={"xl"}>{name}</Text>
          <Image src={`/images/${image}`} width="10rem" height="auto" alt=""></Image>
          <article>
            {published && <Text color="GrayText">Published {published}</Text>}
            <Box margin="auto" justifyContent="center" className="posts">
              <Markdown content={content} />
            </Box>
          </article>
          <NextLink href="/[lang]/projects" as={`/${lang}/projects`}>
            <Button as="a">Back?</Button>
          </NextLink>
        </main>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context: any) {
  const language = getLanguage(context.params.lang);
  let data = JSON.parse(JSON.stringify(await getProjectBySlug(context.params.lang, context.params.project.join("/"))));
  if (data.github) {
    // data.readme = await markdownToHtml(await fetch(`https://raw.githubusercontent.com/${data.github}/master/README.md`).then((r) => r.text()));
  }
  return {
    props: { lang: language, ...data },
  };
}

export async function getStaticPaths() {
  let paths: any = await getAllProjects("en");
  paths = paths.map((project: any) => ({
    params: { project: project.slug.split("/") },
  }));
  const langs = getAllLanguageSlugs();

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
