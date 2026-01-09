import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorizontalNavbar from './components/HorizontalNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import CAssemblyProjects from './components/CAssemblyProjects';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="Layout">
        <VerticalNavbar />
        <div className="Main">
          <HorizontalNavbar />
          <Routes>
            <Route path="/" element={
              <>
                <AboutMeSection />
                <Projects />
                <Skills />
              </>
            } />
            <Route path="/projects/c-assembly" element={<CAssemblyProjects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;