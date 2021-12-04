import { getAllLanguageSlugs, getLanguage } from "^api/lang";
import Redirect from "^components/redirect";

export default function Support() {
  return (
    <Redirect url={"https://discord.gg/zwUQGAG4cP"} aethor>
      Please go to https://discord.gg/zwUQGAG4cP for the support server
    </Redirect>
  );
}
export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      lang: language,
    },
  };
}
