import "./App.css";
import { Aside } from "./layout/aside/Aside";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Main } from "./layout/sections/main/Main";
import { Projects } from "./layout/sections/projects/Projects";
import { Quote } from "./layout/sections/quote/Quote";
import { Skills } from "./layout/sections/skills/Skills";

import ImgProject1 from "./assets/images/project-1.png";
import ImgProject2 from "./assets/images/project-2.png";
import ImgProject3 from "./assets/images/project-3.png";

export interface SocialItemInterface {
  id: number;
  title: string;
  width: string;
  height: string;
  viewBox: string;
}

const dataSocials1 = [
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
];

const dataSocialsForMobileMenu = [
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
];

export interface MenuItemInterface {
  id: number;
  title: string;
  link: string;
}

const dataMenuItems: Array<MenuItemInterface> = [
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
];

export interface ProjectInterface {
  id?: number;
  title: string;
  desc: string;
  stack: string[];
  link: string;
  imgSrc: string;
  isCached?: boolean;
}

const dataProjects: Array<ProjectInterface> = [
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
    isCached: false,
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
];
function App() {
  return (
    <div className="App">
      <Aside list={dataSocials1} />
      <Header
        menu={dataMenuItems}
        list={dataSocials1}
        mobileList={dataSocialsForMobileMenu}
      />
      <Main />
      <Quote />
      <Projects items={dataProjects} />
      {/* <Skills />
      <About />
      <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
