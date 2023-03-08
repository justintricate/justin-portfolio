import CIP from "./CIP";
import Halfsies from "./halfsies";
import SOS from "./sinkorswim";
import Vapor from "./vapor";
import { Icon } from "@iconify-icon/solid";
import { register } from "swiper/element/bundle";

register();

const Projects = () => {
  return (
    <>
      <h1 class="component" style={{ color: "#ccd6f6" }} id="projects">
        <span class="monogreen">02.</span> Projects
      </h1>

      <div class="project-container">
        <Halfsies />
      </div>

      <div class="project-container">
        <SOS />
      </div>

      <div class="project-container">
        <Vapor />
      </div>

      <div class="project-container">
        <CIP />
      </div>
    </>
  );
};

export default Projects;
