import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getAllPosts } from "../api/index";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import TopNav from "../components/topnav";
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
  },
  center: {
    display: "block",
    alignItems: "center",
    textAlign: "center",
  },
});

export default function Home({ posts }: any) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>posts | Tricked.pro</title>
        <meta name="description" content="Tricked's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav active={1} />
      <main className={classes.root}>
        <Typography component="h1" variant="h1" style={{ fontSize: "4rem" }} className={classes.center}>
          Tricked.pro
        </Typography>
        <Typography component="h2" variant="h2" style={{ fontSize: "2rem" }} className={classes.center}>
          Posts
        </Typography>
        <Paper className={classes.center}>
          <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center" className={classes.grid}>
            {posts.map((x: any, s: any) => {
              return (
                <Grid item key={s.toString() + "_CARD"} xs={12} sm={6} className={classes.card}>
                  <Card>
                    <Link href={`posts/${x.slug}`} passHref>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {x.title || x.slug}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" style={{ height: "2rem" }}>
                            {x.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </main>
    </div>
  );
}
export async function getStaticProps(context: any) {
  let paths: any = await getAllPosts();
  return {
    props: { posts: paths },
  };
}
// export async function getStaticPaths() {
//   let paths: any = await getAllPosts();
//   paths = paths.map((post: any) => ({
//     params: { post: post.slug.split("/"), ...post },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
