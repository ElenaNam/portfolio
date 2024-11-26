import "./App.css";
import { initialState } from "./data/initialState";
import { Aside } from "./layout/aside/Aside";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Main } from "./layout/sections/main/Main";
import { Projects } from "./layout/sections/projects/Projects";
import { Quote } from "./layout/sections/quote/Quote";
import { Skills } from "./layout/sections/skills/Skills";

function App() {
  const {
    socials,
    socialsForMobileMenu,
    socialsForFooter,
    menuItems,
    projects,
    skills
  } = initialState;

  return (
    <div className="App">
      <Aside list={socials} />
      <Header menu={menuItems} mobileList={socialsForMobileMenu} />
      <Main />
      <Quote />
      <Projects items={projects} />
      <Skills items={skills} />
      <About />
      <Contacts />
      <Footer socials={socialsForFooter} />
    </div>
  );
}

export default App;
