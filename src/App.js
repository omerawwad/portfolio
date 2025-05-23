import logo from "./images/pp_01.jpg";
import "./App.css";
import Intro from "./components/intro";
import NavBar from "./components/NavBar";

const skills = [
  { name: "HTML", background: "#E44D26", level: "Advanced" },
  { name: "CSS", background: "#264de4", level: "Advanced" },
  { name: "JavaScript", background: "#F0DB4F", level: "Advanced" },
  { name: "React", background: "#61DBFB", level: "Intermediate" },
  { name: "Node.js", background: "#8CC84B", level: "Intermediate" },
  { name: "Express", background: "#000000", level: "Intermediate" },
  { name: "MongoDB", background: "#47A248", level: "Intermediate" },
  { name: "Git", background: "#F05032", level: "Intermediate" },
  { name: "GitHub", background: "#181717", level: "Intermediate" },
  { name: "Figma", background: "#F24E1E", level: "Beginner" },
];

const Profile = {
  name: "Omer Awwad",
  title: "Software Engineer",
  description:
    "I am a Software Engineer graduate from Faculty of Engineerin Ain Shams University with experience in building web applications and mobile applications.",
  avatar: logo,
};

const LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/omer-ashraf/",
    icon: "devicon-linkedin-plain",
  },
  {
    name: "GitHub",
    url: "https://github.com/omerawwad",
    icon: "devicon-github-original",
  },
];

const NAV_LINKS = [
  { name: "Brief", url: "#" },
  { name: "Education", url: "#" },
  { name: "Projects", url: "#" },
  {
    name: "Resume",
    url: "",
  },
];

function App() {
  return (
    <>
      <NavBar nav_links={NAV_LINKS} />
      <Intro profile={Profile} links={LINKS} />
    </>
  );
}

// function Intro() {
//   return (
//     <div className="container">
//       <div className="intro">
//         <h1>{Profile.name}</h1>
//         <h2>{Profile.title}</h2>
//         <span>{Profile.description}</span>
//       </div>
//     </div>
//   );
// }

function IntroCard({ profile }) {
  return (
    <div className="card">
      <Avatar avatar={Profile.avatar} />
      <div className="data">
        <About profile={Profile} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar({ avatar }) {
  return (
    <div className="avatar">
      <img src={avatar} alt="Avatar" width={"100%"} />
    </div>
  );
}

function About({ profile }) {
  return (
    <div className="intro">
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.description}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  const LVL_EMOJIE = {
    Beginner: "👶",
    Intermediate: "👍",
    Advanced: "💪",
  };

  return (
    <div className="skill" style={{ backgroundColor: skill.background }}>
      <span>{skill.name}</span>
      <span>{LVL_EMOJIE[skill.level]}</span>
    </div>
  );
}

export default App;
