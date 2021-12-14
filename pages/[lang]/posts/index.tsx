import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery, Button } from "@chakra-ui/react";
import { readFile } from "fs/promises";
import Link from "next/link";
import { join } from "path";
import { getAllPosts } from "^api/index";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import type { NextJsData } from "^api/types";
import Container from "^components/container";
import i18next from "i18next";
export default function Home({ posts, lang }: NextJsData) {
  const CreatePost = ({ x, y }: { x: any; y: number }) => {
    return (
      <GridItem
        as="article"
        width="auto"
        p="5"
        borderWidth="1px"
        rounded="md"
        cursor="pointer"
        _hover={{
          backgroundColor: "telegram.900",
          color: "white",
        }}
      >
        <Link href={`/[lang]/posts/[post]`} as={`/${lang}/posts/${x.slug}`} passHref>
          <Box>
            <Box>
              <Box>
                <Text variant="h5" component="h2" color="brand.200">
                  {x.title || x.slug}
                </Text>
                <Text variant="body2" color="textSecondary" component="p" height="2rem">
                  {x.description}
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
      </GridItem>
    );
  };

  return (
    <Container lang={lang}>
      <Box maxW={"50rem"} margin="auto">
        <Text fontSize="2xl">{i18next.t("recent_posts")}</Text>
        <SimpleGrid minChildWidth="15rem" spacing={1} justifyContent="center" padding="10px 10px 10px">
          {posts.map((x: any, s: number) => (
            <CreatePost x={x} key={s} y={s} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  const posts = await getAllPosts(params.lang);

  return {
    props: {
      posts: posts,
      lang: language,
    },
  };
}
