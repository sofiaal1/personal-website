import "../App.css";

function VerticalNavbar() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="Vertical-navbar">
      <p className="Navbar-name">Sofia Alvazzi</p>
      <button type="button" className="Nav-link" onClick={() => scrollToSection("about")}>
        about
      </button>
      <button type="button" className="Nav-link" onClick={() => scrollToSection("projects")}>
        projects
      </button>
      <button type="button" className="Nav-link" onClick={() => scrollToSection("skills")}>
        skills
      </button>
    </header>
  );
}

export default VerticalNavbar;
