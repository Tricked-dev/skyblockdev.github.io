import { getPostBySlug, getAllPosts } from "../../api/index";
import Head from "next/head";
import Container from "../../components/container";
import { Box } from "@chakra-ui/react";
function Cursed({ input }: any) {
  return <Box dangerouslySetInnerHTML={{ __html: input }} />;
}
export default function Post({ title, content, description }: any) {
  return (
    <Container>
      <Box variant={"elevation"} shadow="md">
        <Head>
          <title>{title} | Tricked.pro</title>
          <meta name="description" content={description} />
        </Head>
        <main>
          <Box margin="auto" justifyContent="center" marginRight="auto" marginLeft="auto" maxW="60rem" className="posts">
            <Cursed input={content} />
          </Box>
          <br />
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
