import { Box, Button, ButtonGroup, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { getAllProjects, getProjectBySlug } from "../../api";

import Container from "../../components/container";

export default function Home({ projects }: { projects: any[] }) {
  return (
    <Container>
      <Box>
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center" gap="1rem">
          {projects.map((x, y) => {
            return (
              <GridItem key={y} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={`/images/${x.image}`} className="object-cover" alt={x.name} width={"100%"} height="10rem" />
                <Box p="6">
                  <Text fontSize={"larger"}>{x.name}</Text>
                  <Text color="gray.50">{x.description}</Text>
                  <Box></Box>
                </Box>
                <ButtonGroup size="sm" isAttached variant="outline">
                  <Button as="a" colorScheme={"telegram"} href={`/projects/${x.slug}`}>
                    Visit
                  </Button>
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

export async function getStaticProps(context: any) {
  return {
    props: { projects: await getAllProjects() },
  };
}
