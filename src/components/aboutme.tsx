import {
  SiSvelte,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiJavascript,
} from "solid-icons/si";
import { TbBrandReactNative } from "solid-icons/tb";
import { Icon } from "@iconify-icon/solid";

const About = () => {
  return (
    <div class="component">
      <h1 style={{ color: "#ccd6f6" }}>
        <span class="monogreen">01.</span> About Me
      </h1>
      <p>
        Hello! My name is Justin, and I enjoy creating websites and apps. When I
        was 9 years old, my dad took me to our local Half Price Books, and told
        me I could pick out one book of my choosing. My selection was a C++
        tutorial book. (This is a true story!) While I did not end becoming a
        9-year old C++ prodigy, this would be the start of my interest in
        software engineering. Eventually, this led into creating custom Warcraft
        3 maps, styling my MySpace/Tumblr, and more.
      </p>
      <p>
        Fast-forward to now, I have recently undergone a career change, and
        completed FullStack Academy's 17-week Full-Time Software Engineering
        Immersive course. While I have had the privilege of working on FinTech
        for nearly a decade, as well as 6 years serving in the U.S. Army, I am
        ready to bring my newfound skill set to your team.
      </p>
      <p>Here's a bit of what I've worked in recently:</p>
      <ul class="about-list">
        <li>
          <SiJavascript color="#ccd6f6" style={{ "margin-right": "0.5em" }} />
          JavaScript (ES6+)
        </li>
        <li>
          <SiReact color="#ccd6f6" style={{ "margin-right": "0.5em" }} />
          React
        </li>
        <li>
          <TbBrandReactNative
            color="#ccd6f6"
            style={{ "margin-right": "0.5em" }}
          />
          React Native
        </li>
        <li>
          <SiNodedotjs color="#ccd6f6" style={{ "margin-right": "0.5em" }} />
          Node.js
        </li>
        <li>
          <SiTypescript color="#ccd6f6" style={{ "margin-right": "0.5em" }} />
          TypeScript
        </li>
        <li>
          <Icon
            icon="logos:solidjs-icon"
            color="#ccd6f6"
            style={{ "margin-right": "0.5em" }}
          />
          SolidJS
        </li>
        <li>
          <SiSvelte color="#ccd6f6" style={{ "margin-right": "0.5em" }} />
          Svelte
        </li>
      </ul>
    </div>
  );
};

export default About;
