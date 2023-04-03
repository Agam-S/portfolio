import logo from "./logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />

      <AboutMe />

      <Projects />
      <Links />

      <Contact />
    </div>
  );
}

export default App;
