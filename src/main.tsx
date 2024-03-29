import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "../out/min.css";
import NavBar from "./components/navbar";
import About from "./components/aboutme";
import Work from "./components/work/work";
import Projects from "./components/projects/projects";
import Contact from "./components/contact";
import NavDrawer from "./components/mobile/navdrawer";
import Social from "./components/social";

const App = () => {
  return (
    <>
      <Social />
      <NavDrawer />
      <NavBar />
      <About />
      <Projects />
      <Work />
      <Contact />
    </>
  );
};

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("app") as HTMLElement
);
