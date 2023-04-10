import { Icon } from "@iconify-icon/solid";

const Tumblweed = () => {
  return (
    <div class="flex-container">
      <div>
        <div class="title-container">
          <h2>Tumbleweed + Sage</h2>
          <div class="ext-gh">
            <div class="project-link">
              <a
                href="https://tumbleweedandsage3.wordpress.com//"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A link to the website for 'Tumbleweed and Sage' coffee shop."
              >
                <Icon icon="tabler:external-link" color="#a8b2d1" />
              </a>
            </div>
          </div>
        </div>
        <p>
          A wordpress-based landing page for a West Texas-based coffee shop.
          Uses mostly static information, for low upkeep to suit the client's
          business needs. Incorporates online ordering, catering orders, and a
          mobile responsive layout.
        </p>
        <ul class="about-list">
          <li>
            <Icon icon="logos:html-5" class="logo-icon" />
            HTML
          </li>
          <li>
            <Icon icon="ic:baseline-wordpress" class="logo-icon" />
            WordPress
          </li>
        </ul>
      </div>
      <div class="project-photo-right">
        <img
          src="/tumbleweedandsage.webp"
          alt="Screenshot of the website for 'Tumbleweed and Sage' coffee shop."
        />
      </div>
    </div>
  );
};

export default Tumblweed;
