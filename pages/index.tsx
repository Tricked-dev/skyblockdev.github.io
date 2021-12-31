import { useEffect } from "react";
import { useRouter } from "next/router";

import i18next from "i18next";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname == "/") {
      if (i18next.language.substring(0, 2) !== "en" && i18next.language.substring(0, 2) !== "nl") {
        router.push("/en");
      }
      router.push("/" + i18next.language.substring(0, 2));
    }
  });

  return null;
}

/*
export async function getStaticProps() {
	const allLangsData = getSortedLangsData();
	return {
		props: {
			allLangsData,
		},
	};
}
*/
