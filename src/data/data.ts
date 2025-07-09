import ImgProject1 from "../assets/images/project-fill.png";
import ImgProject2 from "../assets/images/project-puzzle.png";
import ImgProject3 from "../assets/images/project-term.png";
import ImgProject4 from "../assets/images/project-tic.png";
import ImgProject5 from "../assets/images/project-graf.png";
import ImgProject6 from "../assets/images/project-green.png";
import ImgProject7 from "../assets/images/project-prof.png";
import ImgProject8 from "../assets/images/project-todo.png";
import { initialStateInterface, ProjectCats } from "./types";

export const initialState: initialStateInterface = {
  socials: [
    {
      id: 0,
      title: "github",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
      link: "https://github.com/elkirillova",
    },
    {
      id: 1,
      title: "codewars",
      width: "32px",
      height: "32px",
      viewBox: "-8 -8 48 48",
      link: "https://www.codewars.com/users/El_ki",
    },
    // {
    //   id: 2,
    //   title: "figma",
    //   width: "32px",
    //   height: "32px",
    //   viewBox: "0 0 32 32",
    //   link: ""
    // },
  ],
  socialsForMobileMenu: [
    {
      id: 0,
      title: "github",
      width: "64px",
      height: "64px",
      viewBox: "0 0 32 32",
      link: "https://github.com/elkirillova",
    },
    {
      id: 1,
      title: "codewars",
      width: "64px",
      height: "64px",
      viewBox: "-8 -8 48 48",
      link: "https://www.codewars.com/users/El_ki",
    },
    // {
    //   id: 2,
    //   title: "figma",
    //   width: "64px",
    //   height: "64px",
    //   viewBox: "0 0 32 32",
    //   link: ""
    // },
  ],
  socialsForFooter: [
    {
      id: 0,
      title: "github",
      width: "32px",
      height: "32px",
      viewBox: "3 3 26 26",
      link: "https://github.com/elkirillova",
    },
    {
      id: 1,
      title: "codewars",
      width: "32px",
      height: "32px",
      viewBox: "-4 -4 40 40",
      link: "https://www.codewars.com/users/El_ki",
    },
    {
      id: 2,
      title: "discord",
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
      link: "https://discordapp.com/users/751424966574211082/",
    },
  ],
  menuItems: [
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
      title: "Filippok",
      desc: "Kindergartens Website",
      stack: [
        "WordPress",
        "PHP",
        "Vite",
        "HTML",
        "SASS",
        "JavaScript",
        "JQuery",
      ],
      link: "https://filipp-ok.ru/",
      imgSrc: ImgProject1,
      isCached: false,
      cat: ProjectCats.COM,
      task: "fullstack",
    },
    {
      id: 1,
      title: "Task Manager",
      desc: "Smart task tracking with filters and pagination",
      stack: [
        "React",
        "React_Router",
        "RHF",
        "RTK_Query",
        "REST",
        "TypeScript",
        "MUI",
      ],
      link: "https://elkirillova.github.io/todolist/",
      imgSrc: ImgProject8,
      isCached: false,
      cat: ProjectCats.EDU,
    },
    {
      id: 2,
      title: "Aikido terminology app",
      desc: "Flashcards for memorizing Aikido words",
      stack: ["React", "React_Router_Dom", "Tailwind"],
      link: "https://aikido-terminology.netlify.app/",
      imgSrc: ImgProject3,
      isCached: false,
      cat: ProjectCats.PET,
    },
    {
      id: 3,
      title: "Tic-tac-toe",
      desc: "Play Tic-Tac-Toe Online",
      stack: ["React", "MUI", "TypeScript"],
      link: "https://elkirillova.github.io/react-game/tic-tac-toe/",
      imgSrc: ImgProject4,
      isCached: false,
      cat: ProjectCats.EDU,
    },
    {
      id: 4,
      title: "Графит",
      desc: "Office Supplies, Books & Gifts Online Store",
      stack: ["React", "Styled_Components", "Pug", "XML+XSLT", "PHP"],
      task: "partial_redesign",
      link: "https://grafitspb.com/",
      imgSrc: ImgProject5,
      isCached: false,
      cat: ProjectCats.COM,
    },
    {
      id: 5,
      title: "Гринлайн",
      desc: "Luxury Vacation Property Services - St. Petersburg Area",
      stack: ["Pug", "Stylus", "XML+XSLT", "PHP"],
      task: "integration",
      link: "https://green-uk.ru/",
      imgSrc: ImgProject6,
      isCached: false,
      cat: ProjectCats.COM,
    },
    {
      id: 6,
      title: "Career Guide",
      desc: "Universities and Colleges in St. Petersburg",
      stack: ["Pug", "Stylus", "XML+XSLT", "PHP"],
      task: "layout + integration",
      link: "https://profession-online.ru/",
      imgSrc: ImgProject7,
      isCached: false,
      cat: ProjectCats.COM,
    },
    {
      id: 7,
      title: "15-puzzle",
      desc: "Play 15-puzzle online",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://rolling-scopes-school.github.io/elenanam-JS2020Q3/codejam-the-gem-puzzle/",
      imgSrc: ImgProject2,
      isCached: false,
      cat: ProjectCats.EDU,
    },
  ],
  skills: [
    {
      id: 0,
      title: "Languages",
      desc: "HTML5 CSS JavaScript(ES6) TypeScript PHP",
    },
    {
      id: 1,
      title: "Basics",
      desc: "SCSS Stylus Pug HTML_Email_Coding REST_API",
    },

    {
      id: 2,
      title: "Other",
      desc: "CMS Wordpress XML+XSLT Jira",
    },
    {
      id: 3,
      title: "Tools",
      desc: "Git GitHub GitLab Figma Adobe_Photoshop Webpack Vite PhpMyAdmin",
    },
    {
      id: 4,
      title: "Libraries",
      desc: "React Next.js ZOD Redux Toolkit+RTK Query Axios Jest+RTL jQuery MUI Radix  Styled_Components Storybook",
    },
  ],
};
