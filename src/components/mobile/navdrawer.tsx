import { NavLink } from "@solidjs/router";
import { navLinks, socialMedia } from "../../../src/config";
import { createSignal } from "solid-js";
import { Icon } from "@iconify-icon/solid";

const NavDrawer = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const handleHamburger = () => {
    const openStatus = isOpen();
    setIsOpen(!openStatus);
    console.log("isOpen:", openStatus);
  };

  return (
    <nav>
      <div class="nav-drawer" onClick={() => handleHamburger()}>
        <a>
          {isOpen() ? (
            <a>
              <Icon icon="ci:close-lg" width="24" class="logo-icon-drawer" />
            </a>
          ) : (
            <a>
              <Icon
                icon="cil:hamburger-menu"
                width="24"
                class="logo-icon-drawer"
              />
            </a>
          )}
        </a>
      </div>
      <div class={`drawer-container ${isOpen() ? "show" : ""}`}>
        <ul>
          {navLinks.map(({ title, url }) => (
            <li>
              <NavLink href={url} onClick={() => setIsOpen(false)}>
                {title}
              </NavLink>
            </li>
          ))}
          <div class="mobile-social">
            <ul>
              {socialMedia.map(({ title, url, icon }) => (
                <li>
                  <NavLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`A link to Justin Wooley's ${title} page.`}
                  >
                    {<Icon icon={icon} />}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavDrawer;
