import { Icon } from "@iconify-icon/solid";

const CIP = () => {
  return (
    <div class="flex-container">
      <div>
        <div class="title-container">
          <h2>Camera in Position</h2>
          <div class="ext-gh">
            <div class="project-link">
              <a
                href="https://github.com/justintricate/camera-in-position"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon
                  icon="tabler:brand-github"
                  color="#a8b2d1"
                  width="24"
                  style={{ "margin-right": "4px" }}
                />
              </a>
            </div>
            <div class="project-link">
              <a
                href="https://camera-in-position.web.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon="tabler:external-link" color="#a8b2d1" width="24" />
              </a>
            </div>
          </div>
        </div>
        <p>
          A web app that helps players of "Rainbow Six: Siege" in their
          gameplay. Has served over 23,000 visitors since the site's inception,
          with 150,000 pageviews. Collaborated with content creators and the
          community-at-large to gain feedback and improve the tool.
        </p>
        <ul class="about-list">
          <li>
            <Icon icon="vscode-icons:file-type-html" class="logo-icon" />
            HTML
          </li>
          <li>
            <Icon icon="vscode-icons:file-type-css" class="logo-icon" />
            CSS
          </li>
          <li>
            <Icon icon="logos:firebase" class="logo-icon" />
            Firebase
          </li>
        </ul>
      </div>
      <div class="project-photo-right">
        <img
          src="public/CIPss.webp"
          alt="Screenshot of the website 'Camera in Position.'"
        />
      </div>
    </div>
  );
};

export default CIP;
