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
            Hello! My name is Justin, and I enjoy creating websites and apps.
            When I was 9 years old, my dad took me to our local Half Price
            Books, and told me I could pick out one book of my choosing. My
            selection was a C++ tutorial book. While I did not end up becoming a
            9-year-old C++ prodigy, this would be the start of my interest in
            software engineering. Eventually, I was creating custom Warcraft 3
            maps, customizing my social media pages in crude HTML, and more.
          </p>
          <p>
            Fast-forward to now, I have recently undergone a career change, and
            completed Fullstack Academy's 17-week Full-Time Software Engineering
            Immersive course. While I have had the privilege of working on
            FinTech for nearly a decade, as well as 6 years serving in the U.S.
            Army, I am ready to bring my newfound skill set to your team.
          </p>
          <p>Here's a bit of what I've worked with lately:</p>
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
