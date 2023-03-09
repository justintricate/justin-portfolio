import { Icon } from "@iconify-icon/solid";

const About = () => {
  return (
    <div class="component">
      <h1 style={{ color: "#ccd6f6" }} id="about">
        <span class="monogreen">01.</span> About Me
      </h1>
      <div class="flex-container">
        <div>
          <p>
            Hello! My name is Justin, and I enjoy creating websites and apps.
            When I was 9 years old, my dad took me to our local Half Price
            Books, and told me I could pick out one book of my choosing. My
            selection was a C++ tutorial book. While I did not end up becoming a
            9-year-old C++ prodigy, this would be the start of my interest in
            software engineering. Eventually, this led to creating custom
            Warcraft 3 maps, customizing my social media pages in crude HTML,
            and more.
          </p>
          <p>
            Fast-forward to now, I have recently undergone a career change, and
            completed FullStack Academy's 17-week Full-Time Software Engineering
            Immersive course. While I have had the privilege of working on
            FinTech for nearly a decade, as well as 6 years serving in the U.S.
            Army, I am ready to bring my newfound skill set to your team.
          </p>
          <p>Here's a bit of what I've worked in recently:</p>
          <ul class="about-list">
            <li>
              <Icon icon="logos:javascript" class="logo-icon" />
              JavaScript (ES6+)
            </li>
            <li>
              <Icon icon="logos:typescript-icon" class="logo-icon" />
              TypeScript
            </li>
            <li>
              <Icon icon="logos:react" class="logo-icon" />
              React
            </li>
            <li>
              <Icon icon="logos:solidjs-icon" class="logo-icon" />
              SolidJS
            </li>
            <li>
              <Icon icon="logos:svelte-icon" class="logo-icon" />
              Svelte
            </li>
            <li>
              <Icon icon="logos:react" class="logo-icon" />
              React Native
            </li>
            <li>
              <Icon icon="logos:redux" class="logo-icon" />
              React Redux
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-node" class="logo-icon" />
              Node.js
            </li>
            <li>
              <Icon icon="logos:google-cloud" class="logo-icon" />
              Google Cloud Vision AI
            </li>
            <li>
              <Icon icon="simple-icons:express" class="logo-icon" />
              Express
            </li>
            <li>
              <Icon icon="logos:postgresql" class="logo-icon" />
              PostgreSQL
            </li>
            <li>
              <Icon icon="logos:python" class="logo-icon" />
              Python
            </li>
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
