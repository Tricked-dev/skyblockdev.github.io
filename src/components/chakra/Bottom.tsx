import { GridItem } from "@chakra-ui/react";
import Contacting from "./Contacting";
import Tools from "./Tools";
import WithChakra from "./withChakra";

const Bottom = () => {
  return (
    <>
      <GridItem paddingBottom="40px">
        <Tools />
      </GridItem>
      <GridItem>
        <Contacting />
      </GridItem>
    </>
  );
};
export default WithChakra(Bottom);
