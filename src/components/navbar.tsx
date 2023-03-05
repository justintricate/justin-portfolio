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
          <a href="#">
            <span style={{ color: "#64ffda" }}>01.</span> About
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ color: "#64ffda" }}>02.</span> Projects
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ color: "#64ffda" }}>03.</span> Experience
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ color: "#64ffda" }}>04.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
