import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery, Button } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "../api/index";
import Container from "../components/container";

export default function Home({ posts }: any) {
  const CreatePost = ({ x, y }: { x: any; y: number }) => {
    return (
      <GridItem as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" width="300px">
        <Link href={`/posts/${x.slug}`} passHref>
          <Box cursor="pointer">
            <Box>
              <Box>
                <Text variant="h5" component="h2">
                  {x.title || x.slug}
                </Text>
                <Text variant="body2" color="textSecondary" component="p" style={{ height: "2rem" }}>
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
    <Container>
      <Box>
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem id="posts" alignItems="center" className="place-items-center">
            <Text fontSize="2xl">Recent posts</Text>
            <SimpleGrid minChildWidth="300px" spacing={1} alignItems="center" wrap="wrap" justifyContent="center" padding="10px 10px 10px">
              {posts.map((x: any, s: number) => (
                <CreatePost x={x} key={s} y={s} />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context: any) {
  let paths: any = await getAllPosts();
  return {
    props: { posts: paths },
  };
}
