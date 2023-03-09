import { Icon } from "@iconify-icon/solid";

const Halfsies = () => {
  return (
    <div class="flex-container">
      <div class="project-photo-left">
        <img
          src="/halfsiesss.webp"
          alt="Screenshot of the landing page for the 'Halfsies' website."
        />
      </div>
      <div>
        <div class="title-container">
          <h2>Halfsies</h2>
          <div class="ext-gh">
            <div class="project-link">
              <a
                href="https://github.com/Team-Celsius/Halfsies"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the GitHub repository for 'Halfsies.'"
              >
                <Icon
                  icon="iconoir:github"
                  color="#a8b2d1"
                  width="24"
                  style={{ "margin-right": "4px" }}
                />
              </a>
            </div>
            <div class="project-link">
              <a
                href="https://halfsies.onrender.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the website 'Halfsies.'"
              >
                <Icon icon="tabler:external-link" color="#a8b2d1" width="24" />
              </a>
            </div>
          </div>
        </div>
        <p>
          An Android and iOS compatible mobile app that allows users to take a
          photo of a receipt and calculate splitting the bill. Uses Ocular
          Character Recognition through Google Cloud Vision AI to extract data
          from receipt images.
        </p>
        <ul class="about-list">
          <li>
            <Icon icon="logos:javascript" class="logo-icon" />
            JavaScript
          </li>
          <li>
            <Icon icon="logos:react" class="logo-icon" />
            React Native
          </li>

          <li>
            <Icon icon="logos:expo-icon" class="logo-icon" />
            Expo
          </li>
          <li>
            <Icon icon="logos:google-cloud" class="logo-icon" />
            Cloud Vision AI
          </li>
          <li>
            <Icon icon="logos:firebase" class="logo-icon" />
            Firebase
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Halfsies;
