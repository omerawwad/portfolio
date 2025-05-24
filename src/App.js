import PROFILE from "./data/profile.json";
import SKILLS from "./data/skills.json";
import LINKS from "./data/links.json";
import NAV_LINKS from "./data/nav_links.json";

import "./App.css";

import Intro from "./components/intro";
import NavBar from "./components/NavBar";
import Certificates from "./components/education/certificates";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <NavBar nav_links={NAV_LINKS.links} resume_link={NAV_LINKS.resume_link} />
      <Intro profile={PROFILE} links={LINKS.links} skills={SKILLS} />
      {/* <Certificates /> */}
      {/* <Projects /> */}
    </>
  );
}

export default App;
