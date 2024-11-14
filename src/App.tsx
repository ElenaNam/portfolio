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
    width: "21px",
    height: "20px",
    viewBox: "0 0 21 20",
  },
  {
    id: 1,
    title: "dribble",
    width: "23px",
    height: "23px",
    viewBox: "0 0 23 23",
  },
  {
    id: 2,
    title: "figma",
    width: "14px",
    height: "20px",
    viewBox: "0 0 14 20",
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
function App() {
  return (
    <div className="App">
      <Aside list={dataSocials1} />
      <Header menu={dataMenuItems} />
      <Main />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
