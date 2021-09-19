import { Box, Text, Link } from "@chakra-ui/react";
export default function Contacting() {
  return (
    <Box bg="blackAlpha.300" style={{ textAlign: "left" }}>
      <Text fontSize="3xl">You can contact me via the following media</Text>
      <Text>
        <b>Discord</b>: tricked#3777{" "}
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
        <b>Email&lsquo;s</b>: trickedcodes@tutanota.com OR contact@tricked.pro( may not be up all the time)
      </Text>
      <Text>
        <b>Github</b>:{" "}
        <Link isExternal href="https://github.com/skyblockdev">
          github.com/skyblockdev
        </Link>
      </Text>
    </Box>
  );
}
