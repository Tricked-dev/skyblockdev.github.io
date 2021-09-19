import { Box, Text, Grid, GridItem, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import Slideshow from "../components/projects";
import Link from "next/link";
import Contacting from "../components/contacting";
import Tools from "../components/tools";
import { getAllPosts } from "../api/index";
import Container from "../components/container";

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

export default function Home({ posts }: any) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1022px)");
  console.log(isLargerThan1280);
  return (
    <Container>
      {/* <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16"> */}

      <Box>
        <Grid container spacing={1} alignItems="center" wrap="wrap" justifyContent="center">
          <GridItem minH="3.4rem" maxW="40rem">
            <Text fontSize="6xl">Hey, I&apos;m tricked</Text>
            <Text>
              I Am Typescript developer who mainly enjoys making discord bots using <a href="https://deno.land">Deno</a>, I do alot more though.
            </Text>
          </GridItem>
          <GridItem item xs={12} sm={12} id="projects">
            <br />
            <Slideshow />
          </GridItem>
          <GridItem item xs={12} sm={12}>
            <br />
            <Tools isLargerThan1280={isLargerThan1280} />
          </GridItem>
          <GridItem item xs={12} sm={12}>
            <br />
            <Contacting />
          </GridItem>
          <GridItem id="posts">
            <Text fontSize="2xl">Recent posts</Text>
            <SimpleGrid columns={isLargerThan1280 ? 2 : 1} spacing={1} alignItems="center" wrap="wrap" justifyContent="center" padding="10px 10px 10px">
              {posts.map((x: any, s: any) => {
                return (
                  <GridItem key={s.toString() + "_CARD"} as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
                    <Link href={`posts/${x.slug}`} passHref>
                      <Box cursor="pointer">
                        <Box>
                          <Box>
                            <Text gutterBottom variant="h5" component="h2">
                              {x.title || x.slug}
                            </Text>
                            <Text variant="body2" color="textSecondary" component="p" style={{ height: "2rem" }}>
                              {x.description}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context: any) {
  let paths: any = await getAllPosts();
  return {
    props: { posts: paths },
  };
}
