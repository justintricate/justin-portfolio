import { Icon } from "@iconify-icon/solid";

const Vapor = () => {
  return (
    <div class="flex-container">
      <div class="project-photo-left">
        <img
          src="/vaporss.webp"
          alt="Screenshot of the eCommerce website, 'Vapor.'"
        />
      </div>
      <div>
        <div class="title-container">
          <h2>Vapor</h2>
          <div class="ext-gh">
            <div class="project-link">
              <a
                href="https://github.com/team-fahrenheit/Vapor"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the GitHub repository for 'Vapor.'"
              >
                <Icon
                  icon="iconoir:github"
                  color="#a8b2d1"
                  style={{ "margin-right": "4px" }}
                />
              </a>
            </div>
            <div class="project-link">
              <a
                href="https://vapor.onrender.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the website 'Vapor.'"
              >
                <Icon icon="tabler:external-link" color="#a8b2d1" />
              </a>
            </div>
          </div>
        </div>
        <p>
          A single page full stack eCommerce store utilizing the Best Buy API.
          Allows users to filter and search items, add to cart, and more.
          Implements user authentication and password hashing.
        </p>
        <ul class="about-list">
          <li>
            <Icon icon="logos:javascript" class="logo-icon" />
            JavaScript
          </li>
          <li>
            <Icon icon="logos:react" class="logo-icon" />
            React
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
            <Icon icon="simple-icons:express" class="logo-icon" />
            Express
          </li>
          <li>
            <Icon icon="logos:postgresql" class="logo-icon" />
            PostgreSQL
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vapor;
