import Container from "./container";
import { useEffect } from "react";
import Aethainer from "./aethainer";
export default function Redirect({ url, children, aethor }: any) {
  let ToUse = aethor ? Aethainer : Container;
  useEffect(() => {
    if (window) {
      window.location.href = url;
    }
  });
  return <ToUse>{children}</ToUse>;
}
