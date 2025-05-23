import "../App.css";
import "../styles/intro.css";

function Intro({ profile, links }) {
  return (
    <div className="container">
      <div className="intro">
        <div className="into-name-bar">
          <h1>{profile.name}</h1>
          <LinkList links={links} />
        </div>
        <h2>{profile.title}</h2>
        <span>{profile.description}</span>
      </div>
    </div>
  );
}

function LinkList({ links }) {
  return (
    <div className="links">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <i className={`${link.icon} link-icon`}></i>
        </a>
      ))}
    </div>
  );
}

export default Intro;
