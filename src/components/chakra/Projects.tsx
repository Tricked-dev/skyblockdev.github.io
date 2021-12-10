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
            <Image src={`/images/${x.image}`} className="object-cover" alt={x.name} width={"100%"} height="10rem" />
            <Box p="6">
              <Text fontSize={"larger"}>{x.name}</Text>
              <Text color="gray.50">{x.description}</Text>
              <Box></Box>
            </Box>
            <div className="btn-group">
              <a href={x.url} className="btn btn-sm">
                Visit
              </a>

              {x.website && (
                <a className="btn btn-sm" href={`https://${x.website}`}>
                  Website
                </a>
              )}
              {x.github && (
                <a className="btn btn-sm" href={`https://github.com/${x.github}`}>
                  Github
                </a>
              )}
            </div>
          </GridItem>
        );
      })}
    </>
  );
};
export default Projects;
