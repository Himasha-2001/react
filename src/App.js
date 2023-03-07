import "./App.css";
import AboutMe from "./screens/AboutMe";
import Education from "./screens/Education";
import Exp from "./screens/Exp";
import Hero from "./screens/Hero";
import NavBar from "./screens/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Education />
      <Exp />
    </>
  );
}

export default App;
