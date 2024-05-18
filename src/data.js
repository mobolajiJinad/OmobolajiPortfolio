import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  SiFramer,
  SiAxios,
  SiMongoose,
  SiExpress,
  SiPassport,
  SiSocketdotio,
} from "react-icons/si";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";

import xshot from "../src/assets/projects/xshot.png";
import foodz from "../src/assets/projects/foodz.png";
import tukayMeme from "../src/assets/projects/tukayMeme.png";
import threadsAppClone from "../src/assets/projects/threadsAppClone.png";


export const skills = [
  { name: "HTML5", icon: TbBrandHtml5 },
  { name: "CSS3", icon: TbBrandCss3 },
  { name: "Javascript", icon: IoLogoJavascript },
  { name: "ReactJS", icon: IoLogoReact },
  { name: "TailwindCSS", icon: TbBrandTailwind },
  { name: "Next.JS", icon: TbBrandNextjs },
  { name: "Framer", icon: SiFramer },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Axios", icon: SiAxios },
  { name: "Mongoose", icon: SiMongoose },
  { name: "ExpressJS", icon: SiExpress },
  { name: "PassportJS", icon: SiPassport },
  { name: "Socket.io", icon: SiSocketdotio },
];

export const projects = [
  {
    imgSrc: threadsAppClone,
    projectLink: "https://threads-app-clone-omobolaji.vercel.app/",
    name: "Thread App Clone",
    shortText:
      "I'm trying to clone a popular social media app, threads by meta. It's currently incomplete though.",
    tools: ["nextjs", "TailwindCSS"],
  },
  {
    imgSrc: tukayMeme,
    projectLink: "https://tukaymeme.vercel.app/",
    name: "Tukay Meme coin",
    shortText:
      'I decided to join a trend on Twitter by using a popular "tukay" meme to create a landing page for an imaginative meme coin bearing the same name - Tukay.',
    tools: ["reactjs", "TailwindCSS", "react-dom", "react-icons"],
  },
  {
    imgSrc: xshot,
    projectLink: "https://xshot.vercel.app/",
    name: "X-shot",
    shortText: "A static photography website.",
    designer: {
      name: "Onile Ismail",
      twitterLink: "https://twitter.com/lyhamsea",
    },
    tools: ["reactjs", "TailwindCSS", "react-router-dom"],
  },
  {
    imgSrc: foodz,
    projectLink: "https://foodz-squady.vercel.app/",
    name: "Foodz",
    shortText: "This is a static landing page for a restaurant called Foodz.",
    tools: ["html", "cSS"],
  },
];
