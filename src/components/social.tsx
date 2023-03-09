import { socialMedia } from "../config";
import { Icon } from "@iconify-icon/solid";
import { NavLink } from "@solidjs/router";

const Social = () => {
  return (
    <div class="social-media">
      {socialMedia.map(({ title, url, icon }) => (
        <a>
          <NavLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`A link to Justin Wooley's ${title} page.`}
          >
            {<Icon icon={icon} />}
          </NavLink>
        </a>
      ))}
    </div>
  );
};

export default Social;
