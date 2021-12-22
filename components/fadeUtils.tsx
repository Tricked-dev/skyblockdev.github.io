/* eslint-disable react/display-name */

import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

let delay = 0.0;
export function FadeInWhenVisible({ type, children, ...props }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  //@ts-ignore -
  let Component = motion[type];
  if (delay < 1) {
    if (delay > 0.1) {
      delay += 0.01;
    } else {
      delay += 0.1;
    }
  }

  return (
    <Component
      {...props}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ type: "spring", damping: 10, stiffness: 100, duration: 0.3, delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </Component>
  );
}

export function comp(name: any) {
  return ({ children, ...props }: any) => (
    <FadeInWhenVisible type={name} {...props}>
      {children}
    </FadeInWhenVisible>
  );
}
