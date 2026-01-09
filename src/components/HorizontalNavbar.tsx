import "../App.css";
import gmailLogo from "../images/gmail-logo.svg";
import linkedinLogo from "../images/linkedin-logo.svg";
import githubLogo from "../images/github-logo.svg";

function HorizontalNavbar() {
  return (
    <header className="Horizontal-navbar">
      <a
        href="https://drive.google.com/file/d/10-_-U2IBhv7h9EHZ3xT0NoiOMSl6S2Xk/view"
        target="_blank"
        rel="noopener noreferrer"
        className="Resume-link"
      >
        Resume
      </a>
      <a
        href="mailto:alvazzi.sofia@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmailLogo} alt="Gmail" className="Icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/sofiaalvazzi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinLogo} alt="LinkedIn" className="Icon" />
      </a>
      <a
        href="https://github.com/sofiaal1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="GitHub" className="Icon" />
      </a>
    </header>
  );
}

export default HorizontalNavbar;
