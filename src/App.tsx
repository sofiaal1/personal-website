import './App.css';
import HorizontalNavbar from './components/HorizontalNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import AboutMeSection from './components/AboutMeSection';

function App() {
  return (
    <div className="Layout">
      <VerticalNavbar/>
      <div className="Main">
        <HorizontalNavbar/>
        <AboutMeSection/>
      </div>
    </div>
  );
}

export default App;

/**
 * <a
          // className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */