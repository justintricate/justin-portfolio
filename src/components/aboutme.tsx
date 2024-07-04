import { Icon } from "@iconify-icon/solid";
import { technologies } from "../config";

const About = () => {
  return (
    <div class="component">
      <h1 class="section-title" id="about">
        <span class="monogreen">01.</span> About Me
      </h1>
      <div class="flex-container">
        <div id="about-text">
          <p>
            Hello! My name is Justin. I am an experienced tech professional who
            loves to combine technology & data, with helping others. My passion
            is rooted in making a positive impact.
          </p>
          <p>
            I had the privilege of working in FinTech for nearly a
            decade, as well as 6 years serving as a medic in the U.S. Army, and am currently a Patient Gaming Specialist in Portland, OR.
          </p>
          <p>Here's a bit of what I've worked with in the past:</p>
          <ul class="about-list">
            {technologies.map(({ title, icon }) => (
              <li>
                <Icon icon={icon} class="logo-icon" />
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div id="my-photo">
          <img src="/me.webp" alt="A photo of Justin Wooley smiling." />
        </div>
      </div>
    </div>
  );
};

export default About;
