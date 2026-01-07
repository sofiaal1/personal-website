import "../App.css";
import headshot from "../images/headshot.jpg";
import HeroHeading from "./HeroHeading";

function AboutMeSection() {
  return (
    <header className="Row-layout">
      <img
        src={headshot}
        alt="Profile photo"
        className="Headshot"
      />
      <div className="Column-layout">
        <HeroHeading/>
        <p className="About-text">I'm studying computer science + quantitative economics @ tufts university. 
          I'm passionate about building projects and systems that address real challenges 
          people and companies face. In my free time, I enjoy reading (especially memoirs), 
          skiing, and trying out new places to eat in Boston!</p>
      </div>
    </header>
  );
}

export default AboutMeSection;
