import "../App.css";
import githubLogo from "../images/github-logo.svg";
import gmailLogo from "../images/gmail-logo.svg";
import linkedinLogo from "../images/linkedin-logo.svg";

function HorizontalNavbar() {
  return (
    <header className="Horizontal-navbar">
      <a
        href="mailto:alvazzi.sofia@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={gmailLogo}
          alt="Gmail"
          className="Icon"
        />
      </a>

      <a
        href="www.linkedin.com/in/sofia-alvazzi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="Icon"
        />
      </a>
      <a
        href="https://github.com/sofiaal1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          alt="Github"
          className="Icon"
        />
      </a>
      <p>
        resume
      </p>
      <p>
        devpost
      </p>
    </header>
  );
}

export default HorizontalNavbar;
