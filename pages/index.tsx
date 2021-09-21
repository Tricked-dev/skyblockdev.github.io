import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
import Container from "../components/container";

export default function Home({ posts }: any) {
  const [isLargerThan1280] = useMediaQuery("(max-width: 1022px)");

  return (
    <Container>
      <Box>
        <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem minH="3.4rem" className="max-w-2xl">
            <Text fontSize="6xl">Hey, I&apos;m tricked</Text>
            <Text>
              I Am Typescript developer who mainly enjoys making discord bots using <a href="https://deno.land">Deno</a>, I do alot more though.
            </Text>
          </GridItem>
          <GridItem item xs={12} sm={12} id="projects" className="max-w-2xl">
            <br />
            <Slideshow />
          </GridItem>
          <GridItem item xs={12} sm={12}>
            <br />
            <Tools isLargerThan1280={!isLargerThan1280} />
          </GridItem>
          <GridItem item xs={12} sm={12}>
            <br />
            <Contacting />
          </GridItem>
          <GridItem id="posts">
            <Text fontSize="2xl">Recent posts</Text>
            <SimpleGrid columns={!isLargerThan1280 ? 2 : 1} spacing={1} alignItems="center" wrap="wrap" justifyContent="center" padding="10px 10px 10px">
              {posts.map((x: any, s: any) => {
                return (
                  <GridItem key={s.toString() + "_CARD"} as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
                    <Link href={`posts/${x.slug}`} passHref>
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
              })}
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
