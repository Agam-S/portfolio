import logo from "./logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />

      <AboutMe />

      {/* <Projects /> */}
      {/* <Education /> */}

      {/* <Contact /> */}
    </div>
  );
}

export default App;
