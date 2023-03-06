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
      <swiper-container>
        <swiper-slide>
          <Trybe />
        </swiper-slide>
        <swiper-slide>
          <PCB />
        </swiper-slide>
        <swiper-slide>
          <Army />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Work;
