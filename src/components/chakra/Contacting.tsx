import { Box, Text, Link } from "@chakra-ui/react";
import WithChakra from "./withChakra";
const Contacting = () => {
  return (
    <Box bg="blackAlpha.300" style={{ textAlign: "left" }}>
      <Text fontSize="3xl">You can contact me via the following media</Text>
      <Text>
        <b>Discord</b>: <Link href="https://discord.com/users/336465356304678913">tricked#3777</Link>{" "}
        <Link isExternal href="https://discord.gg/mY8zTARu4g">
          discord.gg/mY8zTARu4g
        </Link>
      </Text>
      <Text>
        <b>Matrix</b>:{" "}
        <Link isExternal href="https://matrix.to/#/#tricked-hangout:matrix.org">
          matrix.to/#/#tricked-hangout:matrix.org
        </Link>
      </Text>
      <Text>
        <b>Email&lsquo;s</b>: trickedcodes@tutanota.com, tricked@duck.com
      </Text>
      <Text>
        <b>Github</b>:{" "}
        <Link isExternal href="https://github.com/Tricked-dev">
          github.com/Tricked-dev
        </Link>
      </Text>
    </Box>
  );
};
export default WithChakra(Contacting);
