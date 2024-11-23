import ImgProject1 from "../assets/images/project-1.png";
import ImgProject2 from "../assets/images/project-2.png";
import ImgProject3 from "../assets/images/project-3.png";
import { initialStateInterface } from "./interfaces";

export const initialState: initialStateInterface = {
  socials: [
    {
      id: 0,
      title: "github",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
    {
      id: 1,
      title: "dribble",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
    {
      id: 2,
      title: "figma",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
  ],
  socialsForMobileMenu: [
    {
      id: 0,
      title: "githubMobile",
      width: "64px",
      height: "64px",
      viewBox: "0 0 64 64",
    },
    {
      id: 1,
      title: "dribbleMobile",
      width: "64px",
      height: "64px",
      viewBox: "0 0 64 64",
    },
    {
      id: 2,
      title: "figmaMobile",
      width: "64px",
      height: "64px",
      viewBox: "0 0 64 64",
    },
  ],
  socialsForFooter: [
    {
      id: 0,
      title: "github",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
    {
      id: 1,
      title: "figma",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
    {
      id: 2,
      title: "discord",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
    },
  ],
  menuItems: [
    {
      id: 0,
      title: "home",
      link: "/",
    },
    {
      id: 1,
      title: "works",
      link: "#works",
    },
    {
      id: 2,
      title: "about-me",
      link: "#about",
    },
    {
      id: 3,
      title: "contacts",
      link: "#contacts",
    },
  ],
  projects: [
    {
      id: 0,
      title: "ChertNodes",
      desc: "Minecraft servers hosting",
      stack: ["HTML", "SCSS", "Python", "Flask"],
      link: "",
      imgSrc: ImgProject1,
      isCached: true,
    },
    {
      id: 1,
      title: "ProtectX",
      desc: "Discord anti-crash bot",
      stack: [
        "React",
        "Express",
        "Discord.js",
        "Node.js",
        "HTML",
        "SCSS",
        "Python",
        "Flask",
      ],
      link: "",
      imgSrc: ImgProject2,
      isCached: false
    },
    {
      id: 2,
      title: "Kahoot Answers Viewer",
      desc: "Get answers to your kahoot quiz",
      stack: ["CSS", "Express", "Node.js", "Flask"],
      link: "",
      imgSrc: ImgProject3,
      isCached: false,
    },
  ],
};
