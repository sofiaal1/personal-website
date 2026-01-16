import "../App.css";
import { useState } from "react";

function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // Close menu after clicking on mobile
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`Mobile-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile menu button */}
      <button 
        className={`Mobile-menu-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="Mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navbar */}
      <header className={`Vertical-navbar ${isOpen ? 'open' : ''}`}>
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
    </>
  );
}

export default VerticalNavbar;
