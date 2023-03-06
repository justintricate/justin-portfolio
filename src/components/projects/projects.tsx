import CIP from "./CIP";
import Halfsies from "./halfsies";
import SOS from "./sinkorswim";
import Vapor from "./vapor";
import { register } from "swiper/element/bundle";

register();

const Projects = () => {
  return (
    <>
      <h1 class="component" style={{ color: "#ccd6f6" }} id="projects">
        <span class="monogreen">02.</span> Projects
      </h1>
      <swiper-container
        loop="true"
        navigation="true"
        pagination="true"
        scrollbar="true"
        style={{
          "--swiper-navigation-color": "#64ffda",
          "--swiper-pagination-color": "#ccd6f6",
        }}
      >
        <swiper-slide>
          <div class="slide-container">
            <Halfsies />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <SOS />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <Vapor />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <CIP />
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Projects;
