import CIP from "./CIP";
import Halfsies from "./halfsies";
import SOS from "./sinkorswim";
import Vapor from "./vapor";
import { register } from "swiper/element/bundle";

register();

const Projects = () => {
  return (
    <>
      <h1 class="component" style={{ color: "#ccd6f6" }}>
        <span class="monogreen">02.</span> Projects
      </h1>
      <swiper-container>
        <swiper-slide>
          <Halfsies />
        </swiper-slide>
        <swiper-slide>
          <SOS />
        </swiper-slide>
        <swiper-slide>
          <Vapor />
        </swiper-slide>
        <swiper-slide>
          <CIP />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Projects;
