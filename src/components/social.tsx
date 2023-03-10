import { socialMedia, email } from "../config";
import { Icon } from "@iconify-icon/solid";

const Social = () => {
  return (
    <div class="social-media">
      {socialMedia.map(({ title, url, icon }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`A link to Justin Wooley's ${title} page.`}
        >
          {<Icon icon={icon} />}
        </a>
      ))}
      <a href={`mailto:${email}`} aria-label="A link to send Justin an email.">
        <Icon icon="iconoir:mail" />
      </a>
    </div>
  );
};

export default Social;
