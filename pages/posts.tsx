import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery, Button } from "@chakra-ui/react";
import Link from "next/link";
import { getAllPosts } from "../api/index";
import Container from "../components/container";

export default function Home({ posts }: any) {
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
        <Link href={`/posts/${x.slug}`} passHref>
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
    <Container>
      <Box maxW={"50rem"} margin="auto">
        <Text fontSize="2xl">Recent posts</Text>
        <SimpleGrid minChildWidth="15rem" spacing={1} justifyContent="center" padding="10px 10px 10px">
          {posts.map((x: any, s: number) => (
            <CreatePost x={x} key={s} y={s} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  let paths: any = await getAllPosts();
  return {
    props: { posts: paths },
  };
}
