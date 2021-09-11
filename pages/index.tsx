import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
    maxWidth: "800px",
    justify: "center",
    margin: "auto",
  },
  center: {
    wordWrap: "break-word",
    maxWidth: "100vw",
    display: "block",
    alignItems: "center",
    textAlign: "center",
  },
});

interface Project {
  image: string;
  name: string;
  description: string;
  repository?: string;
  link?: string;
}

const projects: Project[] = [
  {
    image: "/images/aethor.png",
    name: "Aethor",
    description: "Aethor is the perfect multipurpose bot for your discord server",
    link: "https://aethor.floppa.info/",
  },
  {
    image: "/images/texter.png",
    name: "Texter",
    description: "The best powercord plugin if you want to get attention in a discord chat",
    repository: "https://github.com/SkyBlockDev/texter",
  },
  {
    image: "/images/timages.png",
    name: "NextJs Image Uploader",
    description: "A simple nextjs image uploader deployable to vercel using mongodb as a database",
    repository: "https://github.com/SkyBlockDev/next-image-uploader",
  },
  {
    image: "/images/lowestbins.png",
    name: "lowestbins",
    description: "Lowestbins was my first rust project it uses the hypixel api to fetch all auctions and return the lowest bin of each item",
    repository: "https://github.com/SkyBlockDev/lowestbins",
    link: "https://api.tricked.pro/lowestbins",
  },
  {
    image: "/images/natico.png",
    name: "Natico",
    description: "Natico is a advanced discordeno framework for making discord bots",
    repository: "https://github.com/naticoo/framework",
  },
  {
    image: "/images/scriptbot.png",
    name: "Script Bot",
    description: "Script bot is a bot that can be used to make scripts to be executed within discord for example make channels and rename channels",
    repository: "https://github.com/SkyBlockDev/script-bot",
  },
  {
    image: "/images/website.png",
    name: "Tricked.is-a.dev",
    description: "A cool website that hosts cool projects",
    repository: "https://github.com/SkyBlockDev/skyblockdev.github.io",
    link: "https://tricked.is-a.dev",
  },
  {
    image: "/images/soggaimages.png",
    name: "Sogga Images",
    description: "A image uploader with a fastify backend and nextjs frontend ment to be very fast",
    repository: "https://github.com/SkyBlockDev/images-frontend",
    link: "https://sogga.floppa.info",
  },
  {
    image: "/images/doomfetch.png",
    name: "Doom Fetch",
    description: "A fetch wrapper for deno which allows you to use classes to make using fetch easier",
    repository: "https://github.com/SkyBlockDev/doomfetch",
  },
  {
    image: "/images/linuxcommands.png",
    name: "Linux Commands",
    description: "A cool website you can use to share intresting linux commands you have found or make yourself",
    link: "https://linuxcommands.vercel.app/",
  },
  {
    image: "/images/redditbot.png",
    name: "AI Reddit Bot",
    description: "A reddit bot that uses ai and the last post's comments to generate a new post feel free to try it out",
    link: "https://www.reddit.com/r/bottalks/",
  },
];

export default function Home() {
  const classes = useStyles();
  return (
    <section>
      <Head>
        <title>welcome | Tricked.pro</title>
        <meta name="description" content="Tricked's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <main className={classes.root}>
        <Typography component="h1" variant="h1" style={{ fontSize: "4rem" }} className={classes.center}>
          Tricked.pro
        </Typography>
        <Typography component="h2" variant="h2" style={{ fontSize: "2rem" }} className={classes.center}>
          These are some projects i have made
        </Typography>
        <Paper className={classes.center}>
          <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center" className={classes.grid}>
            {projects.map((x, s) => {
              return (
                <Grid item key={s.toString() + "_CARD"} xs={12} sm={6} className={classes.card}>
                  <Card>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={x.image} title={x.image.split("/")[3]} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {x.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ minHeight: "4rem" }}>
                          {x.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {x.repository ? (
                        <Button
                          size="small"
                          color="secondary"
                          variant="contained"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = x.repository as string;
                          }}
                        >
                          Repository
                        </Button>
                      ) : (
                        ""
                      )}
                      {x.link ? (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = x.link as string;
                          }}
                        >
                          Website
                        </Button>
                      ) : (
                        ""
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </main>
    </section>
  );
}
