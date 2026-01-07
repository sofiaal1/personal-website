import './App.css';
import HorizontalNavbar from './components/HorizontalNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';

function App() {
  return (
    <div className="Layout">
      <VerticalNavbar/>
      <div className="Main">
        <HorizontalNavbar/>
        <AboutMeSection/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;