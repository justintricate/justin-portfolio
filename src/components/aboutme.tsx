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
            Hello! My name is Justin. I am an experienced data analyst, who
            enjoys a well-crafted spreadsheet. I love gathering and analyzing
            data (no really!) I am the type of person that will do a week's
            research for a 25 dollar purchase, and have been told my product
            research for larger buys borderlines on PhD levels. (In jest, of
            course. Probably...)
          </p>
          <p>
            While I have had the privilege of working in FinTech for nearly a
            decade, as well as 6 years serving in the U.S. Army, I am ready to
            bring my newfound skill set to your team.
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
