import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <ProjectsSection/>
      <Contact/>
    </div>
  );
}

export default App;
