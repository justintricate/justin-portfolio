import { socialMedia } from "../config";
import { Icon } from "@iconify-icon/solid";
import { NavLink } from "@solidjs/router";

const Social = () => {
  return (
    <div class="social-media">
      {socialMedia.map(({ url, icon }) => (
        <a>
          <NavLink href={url} target="_blank" rel="noopener noreferrer">
            {<Icon icon={icon} />}
          </NavLink>
        </a>
      ))}
    </div>
  );
};

export default Social;
