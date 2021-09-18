import * as React from "react";
import { Link } from "@chakra-ui/react";

const SkipNavLink: React.FC = ({ className }: any) => (
  <Link
    className={className}
    variant="ui"
    href="#main-content"
    sx={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      backgroundColor: "background",
      opacity: 0,
      pointerEvents: "none",

      "&:focus": {
        opacity: 1,
        pointerEvents: "auto",
      },
    }}
  >
    Skip to main content
  </Link>
);

export default SkipNavLink;
