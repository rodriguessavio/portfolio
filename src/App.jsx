import './App.css';

import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <About/>
      <Projects/>
      <Experience/>
    </>
  )
}

export default App;
