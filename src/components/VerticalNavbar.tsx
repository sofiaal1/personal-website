import "../App.css";

function VerticalNavbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="Vertical-navbar">
      <p>Sofia Alvazzi</p>
      <p onClick={() => scrollToSection('about')}>about</p>
      <p onClick={() => scrollToSection('projects')}>projects</p>
      <p onClick={() => scrollToSection('skills')}>skills</p>
    </header>
  );
}

export default VerticalNavbar;
