import { Box, Grid, GridItem } from "@chakra-ui/react";
import Slideshow from "../components/projects";

import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <Box>
        <Grid spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem id="projects">
            <Slideshow />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
