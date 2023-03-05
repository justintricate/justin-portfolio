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
    <ol class={`navigation ${scrollDirection()}`}>
      {navLinks.map(({ title, url }) => (
        <li>
          <a href={url}>{title}</a>
        </li>
      ))}
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button style={"margin-left: -20px; margin-right: 20px"}>Resume</button>
      </a>
    </ol>
  );
};

export default NavBar;
