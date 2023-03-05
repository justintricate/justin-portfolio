import { createSignal, createEffect } from "solid-js";

const NavBar = () => {
  const [scrolled, setScrolled] = createSignal(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav class="navigation">
      <ul>
        <li>
          <a href="#">01. About</a>
        </li>
        <li>
          <a href="#">02. Projects</a>
        </li>
        <li>
          <a href="#">03. Experience</a>
        </li>
        <li>
          <a href="#">04. Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
