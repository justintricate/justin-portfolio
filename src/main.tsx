import { render } from "solid-js/web";
import "dracula-ui/styles/dracula-ui.css";
import "./style.css";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/aboutme";
import Work from "./components/work/work";
import Projects from "./components/projects/projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Work />
      <Contact />
    </>
  );
};

render(() => <App />, document.getElementById("app") as HTMLElement);
