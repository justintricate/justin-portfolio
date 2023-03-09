import { NavLink } from "@solidjs/router";
import { navLinks } from "../../../src/config";
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
      <ol class="nav-drawer" onClick={() => handleHamburger()}>
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
      </ol>
      <div class={`drawer-container ${isOpen() ? "show" : ""}`}>
        <ul>
          {navLinks.map(({ title, url }) => (
            <li>
              <NavLink href={url} onClick={() => setIsOpen(false)}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavDrawer;
