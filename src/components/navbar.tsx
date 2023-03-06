import { NavLink } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { navLinks } from "../config";

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
      <ol class={`navigation ${scrollDirection()}`}>
        {navLinks.map(({ title, url }) => (
          <li>
            <NavLink href={url}>{title}</NavLink>
          </li>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={"margin-left: -20px;padding:0"}
        >
          <button style={" margin-left: 1em; margin-right: 2.5em"}>
            Resume
          </button>
        </a>
      </ol>
    </nav>
  );
};

export default NavBar;
