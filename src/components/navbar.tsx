import { createEffect, createSignal } from "solid-js";
import { navLinks } from "../config";

const NavBar = () => {
  const [lastScroll, setLastScroll] = createSignal(0);
  const [scrollDirection, setScrollDirection] = createSignal("");

  createEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDirection("");
        return;
      }
      if (currentScroll > lastScroll()) {
        setScrollDirection("scroll-down");
      } else {
        setScrollDirection("scroll-up");
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ol class={`${scrollDirection()} navigation`}>
      {navLinks.map(({ title, url }) => (
        <li>
          <a href={url}>{title}</a>
        </li>
      ))}
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button style={"margin-left: -20px"}>Resume</button>
      </a>
    </ol>
  );
};

export default NavBar;
