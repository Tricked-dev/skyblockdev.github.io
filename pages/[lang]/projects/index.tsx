import { Box, Button, ButtonGroup, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { getAllProjects, getProjectBySlug } from "^api";
import FadeInWhenVisible from "^components/FadeIn";
import Container from "^components/container";
import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import NextLink from "next/link";
import { comp } from "^components/fadeUtils";
export default function Projects({ projects, lang }: { projects: any[]; lang: string }) {
  return (
    <Container lang={lang}>
      <Box>
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center" gap="1rem">
          {projects.map((x, y) => {
            return (
              <GridItem key={y} borderWidth="1px" borderRadius="lg" overflow="hidden" as={comp("div")}>
                <Image src={`/images/${x.image}`} className="object-cover" alt={x.name} width={"100%"} height="10rem" />
                <Box p="6">
                  <Text fontSize={"larger"}>{x.name}</Text>
                  <Text color="gray.50">{x.description}</Text>
                  <Box></Box>
                </Box>
                <ButtonGroup size="sm" isAttached variant="outline">
                  <NextLink href={`/[lang]/projects/[project]`} as={`/${lang}/projects/${x.slug}`}>
                    <Button as="a" colorScheme={"telegram"}>
                      Visit
                    </Button>
                  </NextLink>

                  {x.website && (
                    <Button as="a" colorScheme={"telegram"} mr="-px" href={`https://${x.website}`}>
                      Website
                    </Button>
                  )}
                  {x.github && (
                    <Button as="a" colorScheme={"telegram"} mr="-px" href={`https://github.com/${x.github}`}>
                      Github
                    </Button>
                  )}
                </ButtonGroup>
              </GridItem>
            );
          })}
        </Grid>
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
  return {
    props: {
      lang: language,
      projects: await getAllProjects(language),
    },
  };
}
