import { Box, Button, Text, Image } from "@chakra-ui/react";
import * as icons from "@chakra-ui/icons";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
const projects = [
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

export default function Slideshow() {
  let [page, setPage] = useState(0);
  let createPreview = (x: any) => {
    return (
      <Box background="blackAlpha.500" border="8px" borderColor="blackAlpha.500" rounded="md" width="xl">
        <Box>
          <Text variant="h2" textShadow="2xl" fontSize="2xl">
            {x.name}
          </Text>
        </Box>
        <Image src={x.image} width="40rem" height="24rem" />
        <Box minH="3rem">
          <Text>{x.description}</Text>
        </Box>
        <Box>
          {x.repository && (
            <Button>
              <Link href={x.repository}>Repository</Link>
            </Button>
          )}
          {x.link && (
            <Button>
              <Link href={x.link}>Goto</Link>
            </Button>
          )}
        </Box>
      </Box>
    );
  };
  // setInterval(upOne, 2500);
  // let comps = projects.map((x) => {
  //   return (
  //     <Box background="blackAlpha.500" border="8px" borderColor="blackAlpha.500" rounded="md" width="xl">
  //       <Box>
  //         <Text variant="h2" textShadow="2xl" fontSize="2xl">
  //           {x.name}
  //         </Text>
  //       </Box>
  //       <Image src={x.image} width="40rem" height="24rem" />
  //       <Box minH="3rem">
  //         <Text>{x.description}</Text>
  //       </Box>
  //       <Box>
  //         {x.repository && (
  //           <Button>
  //             <Link href={x.repository}>Repository</Link>
  //           </Button>
  //         )}
  //         {x.link && (
  //           <Button>
  //             <Link href={x.link}>Goto</Link>
  //           </Button>
  //         )}
  //       </Box>
  //     </Box>
  //   );
  // });
  const upOne = () => {
    setPage(page++);
    if (page == projects.length - 1) setPage(0);
  };
  return (
    <>
      {createPreview(projects[page])}

      <Box className="">
        <Button
          leftIcon={<icons.ArrowLeftIcon />}
          onClick={() => {
            upOne();
          }}
        />

        <Button
          leftIcon={<icons.ArrowRightIcon />}
          className=""
          onClick={() => {
            setPage(page--);
            if (page == -1) setPage(projects.length - 1);
          }}
        />
      </Box>
    </>
  );
}
