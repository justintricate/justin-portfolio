import { NavLink } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { navLinks } from "../config";
import { Icon } from "@iconify-icon/solid";

const handleNavItemClick = () => {
  setTimeout(() => {
    document.querySelector(".navigation")?.classList.add("scroll-show");
    document.querySelector(".navigation")?.classList.remove("hide");
  }, 50); // delay in milliseconds
};

const NavBar = () => {
  const [lastScroll, setLastScroll] = createSignal(0);
  const [scrollDirection, setScrollDirection] = createSignal("");
  const [hasScrolledUp, setHasScrolledUp] = createSignal(false);

  createEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDirection("");
        setHasScrolledUp(false);
        return;
      }
      if (currentScroll > lastScroll() && currentScroll > 100) {
        setScrollDirection("scroll-down");
        document.querySelector(".navigation")?.classList.add("hide");
        setHasScrolledUp(true);
      } else {
        setScrollDirection("scroll-up");
        document.querySelector(".navigation")?.classList.remove("hide");
        if (hasScrolledUp()) {
          document.querySelector(".navigation")?.classList.add("scroll-show");
        }
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ol class={`navigation ${scrollDirection()}`} start="2">
        <li class="home-logo">
          <a
            href="#"
            class="icon-link"
            aria-label="A logo icon that returns you to the top of the page."
          >
            <Icon icon="ic:twotone-code-off" width="48" class="logo-icon" />
          </a>
        </li>

        {navLinks.map(({ title, url }) => (
          <li>
            <NavLink href={url} onClick={() => handleNavItemClick()}>
              {title}
            </NavLink>
          </li>
        ))}
        <li class="resume-li">
          <span
            role="button"
            tabindex="0"
            onClick={() => window.open("/resume.pdf")}
            aria-label="A button that opens Justin Wooley's PDF resume."
          >
            Resume
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
