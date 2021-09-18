import Head from "next/head";
import { getAllPosts } from "../api/index";
import Link from "next/link";
import TopNav from "../components/topnav";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
export default function Home({ posts }: any) {
  return (
    <div>
      <Head>
        <title>posts | Tricked.pro</title>
        <meta name="description" content="Tricked's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav active={1} />
      <main className="posts">
        <Text component="h1" variant="h1" style={{ fontSize: "4rem" }}>
          Tricked.pro
        </Text>
        <Text component="h2" variant="h2" style={{ fontSize: "2rem" }}>
          Posts
        </Text>
        <Box>
          <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center" className={classes.grid}>
            {posts.map((x: any, s: any) => {
              return (
                <GridItem item key={s.toString() + "_CARD"} xs={12} sm={6}>
                  <Link href={`posts/${x.slug}`} passHref>
                    <Box>
                      <Box>
                        <Text gutterBottom variant="h5" component="h2">
                          {x.title || x.slug}
                        </Text>
                        <Text variant="body2" color="textSecondary" component="p" style={{ height: "2rem" }}>
                          {x.description}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </main>
    </div>
  );
}
export async function getStaticProps(context: any) {
  let paths: any = await getAllPosts();
  return {
    props: { posts: paths },
  };
}
// export async function getStaticPaths() {
//   let paths: any = await getAllPosts();
//   paths = paths.map((post: any) => ({
//     params: { post: post.slug.split("/"), ...post },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
