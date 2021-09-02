import { getPostBySlug, getAllPosts } from "../../api/index";
import Paper from "@material-ui/core/Paper";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import TopNav from "../../components/topnav";
const useStyles = makeStyles({
  media: {
    height: "260px",
  },
  card: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  grid: {
    padding: "4px 4px 4px",
  },
  root: {
    alignItems: "center",
    width: "80%",
    justify: "center",
    maxWidth: "90%",
    margin: "auto",
    padding: "2px 20px",
  },
  center: {
    display: "block",
    alignItems: "center",
    textAlign: "center",
  },
});
function Cursed({ input }: any) {
  return <div dangerouslySetInnerHTML={{ __html: input }} />;
}
export default function Post({ title, content, description }: any) {
  const classes = useStyles();
  return (
    <div>
      <TopNav active={null} />
      <Paper className={classes.root} variant={"elevation"}>
        <Head>
          <title>{title} | Tricked</title>
          <meta name="description" content={description} />
        </Head>
        <main>
          <div>
            <Cursed input={content} />
          </div>
        </main>
      </Paper>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: await getPostBySlug(context.params.post.join("/")),
  };
}

export async function getStaticPaths() {
  let paths: any = await getAllPosts();
  paths = paths.map((post: any) => ({
    params: { post: post.slug.split("/") },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
