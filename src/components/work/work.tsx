// @ts-nocheck

import Devs from "./100devs";
import Trybe from "./trybe";
import PCB from "./pcb";
import Army from "./army";
import Treasury from "./treasury";
import { register } from "swiper/element/bundle";

register();

const Work = () => {
  return (
    <div class="component">
      <h1 class="section-title" style={{ color: "#ccd6f6" }} id="jobs">
        <span class="monogreen">03.</span> Experience
      </h1>
      <swiper-container
        class="swiper-container"
        loop="true"
        navigation="true"
        pagination="true"
        style={{
          "--swiper-navigation-color": "#64ffda",
          "--swiper-pagination-color": "#64ffda",
          "--swiper-pagination-bullet-inactive-color": "#ccd6f6",
          "--swiper-navigation-size": "2rem",
          "--swiper-navigation-sides-offset": "0",
        }}
      >
        <swiper-slide>
          <div class="slide-container">
            <Devs />
          </div>
        </swiper-slide>
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
            <Treasury />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-container">
            <Army />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Work;
