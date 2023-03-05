import CIP from "./CIP";
import Halfsies from "./halfsies";
import SOS from "./sinkorswim";
import Vapor from "./vapor";

const Projects = () => {
  return (
    <>
      <h1 class="component" style={{ color: "#ccd6f6" }}>
        <span class="monogreen">02.</span> Projects
      </h1>
      <Halfsies />
      <SOS />
      <Vapor />
      <CIP />
    </>
  );
};

export default Projects;
