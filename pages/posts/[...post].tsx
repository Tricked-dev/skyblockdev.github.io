import { getPostBySlug, getAllPosts } from "../../api/index";
import Container from "../../components/container";
import { Box, Text, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

const components = {
  ul: UnorderedList,
  li: ListItem,
  a: ({ children, href }: any) => {
    return (
      <Link color="green.300" href={href}>
        <Text as="u">{children}</Text>
      </Link>
    );
  },
  h4: ({ children }: any) => {
    return (
      <Text variant={"h4"} fontSize="large">
        {children}
      </Text>
    );
  },
  h3: ({ children }: any) => {
    return (
      <Text variant={"h3"} fontSize="x-large">
        {children}
      </Text>
    );
  },
  h2: ({ children }: any) => {
    return (
      <Text variant={"h2"} fontSize="2xl">
        {children}
      </Text>
    );
  },
  h1: ({ children }: any) => {
    return (
      <Text variant={"h1"} fontSize="3xl">
        {children}
      </Text>
    );
  },
};

export default function Post({ title, content, description }: any) {
  return (
    <Container title={title} description={description}>
      <Box variant={"elevation"} shadow="md">
        <main>
          <article>
            <Box margin="auto" justifyContent="center" marginRight="auto" marginLeft="auto" maxW="60rem" className="posts">
              <MDXRemote {...content} components={components} />
              {/* <Cursed input={content} /> */}
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
