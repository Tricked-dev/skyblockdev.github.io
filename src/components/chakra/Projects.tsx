import { Box, Button, ButtonGroup, Grid, GridItem, Link, Image } from "@chakra-ui/react";
import i18next from "i18next";
import { FadeIn, ReactLink, Text } from "../lib";
import WithChakra from "./withChakra";

const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((x, y) => {
        return (
          <GridItem key={y} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <FadeIn>
              <Image src={`/images/${x.image}`} className="object-cover" alt={x.name} width={"100%"} height="10rem" />
              <Box p="6">
                <Text fontSize={"larger"}>{x.name}</Text>
                <Text color="gray.50">{x.description}</Text>
                <Box></Box>
              </Box>
              <ButtonGroup size="sm" isAttached variant="outline">
                <Link href={x.url}>
                  <Button as="a" colorScheme={"telegram"}>
                    Visit
                  </Button>
                </Link>

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
            </FadeIn>
          </GridItem>
        );
      })}
    </>
  );
};
export default WithChakra(Projects);
