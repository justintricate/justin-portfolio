import { Icon } from "@iconify-icon/solid";

const SOS = () => {
  return (
    <div class="flex-container">
      <div>
        <div class="title-container">
          <h2>Sink or Swim</h2>
          <div class="ext-gh">
            <div class="project-link">
              <a
                href="https://github.com/justintricate/sink-or-swim"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the GitHub repository for 'Sink or Swim.'"
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
                href="https://sink-or-swim.streamlit.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the website 'Sink or Swim.'"
              >
                <Icon icon="tabler:external-link" color="#a8b2d1" />
              </a>
            </div>
          </div>
        </div>
        <p>
          A web app that uses machine learning to determine if a user would have
          survived the Titanic. Analyzes over 800 data points using modern data
          processing and modeling techniques. Features a decision tree
          regression model.
        </p>
        <ul class="about-list">
          <li>
            <Icon icon="logos:python" class="logo-icon" />
            Python
          </li>
          <li>
            <Icon icon="logos:numpy" class="logo-icon" />
            NumPy
          </li>
          <li>
            <Icon icon="simple-icons:pandas" class="logo-icon" />
            Pandas
          </li>
          <li>
            <Icon icon="simple-icons:scikitlearn" class="logo-icon" />
            scikit-learn
          </li>
        </ul>
      </div>
      <div class="project-photo-right">
        <img
          src="/sinkorswimss.webp"
          alt="Screenshot of the website 'Sink or Swim.'"
        />
      </div>
    </div>
  );
};

export default SOS;
