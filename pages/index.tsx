import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery, Button } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import { useState } from "react";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
import Container from "../components/container";

export default function Home({ posts }: any) {
  const [isLargerThan1280] = useMediaQuery("(max-width: 1022px)");
  let [visable, show] = useState(false);
  let num = 0;
  const CreatePost = ({ x, y }: { x: any; y: number }) => {
    if (y > 1 && !visable) {
      return <></>;
    }

    return (
      <GridItem as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
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
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center" padding="4px 4px">
          <GridItem minH="3.4rem">
            <Text fontSize="6xl">Hey, I&apos;m tricked</Text>
            <Text>
              I Am Typescript developer who mainly enjoys making discord bots using <a href="https://deno.land">Deno</a>, I do alot more though.
            </Text>
          </GridItem>
          <GridItem item xs={12} sm={12} id="projects">
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
          <GridItem id="posts" alignItems="center" className="place-items-center">
            <Text fontSize="2xl">Recent posts</Text>
            <SimpleGrid minChildWidth="300px" spacing={1} alignItems="center" wrap="wrap" justifyContent="center" padding="10px 10px 10px">
              {posts.map((x: any, s: number) => (
                <CreatePost x={x} key={s} y={s} />
              ))}
            </SimpleGrid>
            <Box className="flex justify-center items-center ">
              {!visable && <Button onClick={() => show(true)}>Show More</Button>}
              {visable && <Button onClick={() => show(false)}>Show Less</Button>}
            </Box>
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
