import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HorizontalNavbar from './components/HorizontalNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CAssemblyProjects from './components/CAssemblyProjects';

function App() {
  return (
    <Router basename="/personal-website">
      <div className="Layout">
        <VerticalNavbar />
        <div className="Main">
          <HorizontalNavbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutMeSection />
                  <Skills />
                  <Projects />
                </>
              }
            />
            <Route path="/projects/c-assembly" element={<CAssemblyProjects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;