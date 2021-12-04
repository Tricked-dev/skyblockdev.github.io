import Container from "^components/container";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
const Four0Four = () => {
  useEffect(() => {
    if (!window.location.pathname.startsWith("/nl") && !window.location.pathname.startsWith("/en")) {
      window.location.pathname = "/en" + window.location.pathname;
    }
  }, []);
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
export default Four0Four;
