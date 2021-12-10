import { Link as ChakraLink } from "@chakra-ui/react";
import WithChakra from "./withChakra";
const ReactLink = ({ lang, i18n = true, href, children, ...props }) => {
  return (
    <ChakraLink href={i18n ? `/${lang}${href}` : href} {...props}>
      {children}
    </ChakraLink>
  );
};
export default WithChakra(ReactLink);
