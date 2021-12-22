import Container from "./container";
const Links = [
  {
    name: "Commands",
    route: "/aethor/general",
  },
  {
    name: "Invite",
    route: "/aethor/invite",
  },
  {
    name: "Support",
    route: "/aethor/support",
  },
  {
    name: "Back to main page",
    route: "/",
  },
];
const meta = {
  title: "Aethor",
  description: `Aethor is the best discord bot for all your needs`,
  type: "website",
  themeColor: "#317EFB",
  keywords: "discord bot discordbot aethor tricked.pro",
  viewport: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
};
export default function Cont({ children }: any) {
  return (
    <Container Links={Links} TextValue={"Aethor"} {...meta}>
      {children}
    </Container>
  );
}
