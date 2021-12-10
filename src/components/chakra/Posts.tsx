import { Box, Grid, GridItem } from "@chakra-ui/react";
import i18next from "i18next";
import { ReactLink, Text } from "../lib";
import WithChakra from "./withChakra";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((x, y) => {
        return (
          <GridItem
            as="article"
            width="auto"
            p="5"
            borderWidth="1px"
            rounded="md"
            cursor="pointer"
            _hover={{
              backgroundColor: "telegram.900",
              color: "white",
            }}
          >
            <ReactLink i18n={false} href={x.url} passHref>
              <Text variant="h5" component="h2">
                {x.title || x.url}
              </Text>
              <Text variant="body2" color="textSecondary" component="p" height="2rem">
                {x.description}
              </Text>
            </ReactLink>
          </GridItem>
        );
      })}
    </>
  );
};
export default WithChakra(Posts);
