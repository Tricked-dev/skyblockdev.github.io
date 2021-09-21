import Container from "../components/container";
import { Box, Text } from "@chakra-ui/react";
const offline = () => {
  return (
    <Container>
      <Box alignItems="center" wrap="wrap" justifyContent="center">
        <Box alignItems="center" wrap="wrap" justifyContent="center" textAlign="center">
          <Text fontSize="6xl">404 page not found</Text>
        </Box>
      </Box>
    </Container>
  );
};
export default offline;
