import Trybe from "./trybe";
import PCB from "./pcb";
import Army from "./army";
import { register } from "swiper/element/bundle";

register();

const Work = () => {
  return (
    <>
      <h1 class="component" style={{ color: "#ccd6f6" }}>
        <span class="monogreen">03.</span> Experience
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
            <Trybe />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <PCB />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <Army />
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Work;
