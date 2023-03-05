import { createSignal, createEffect } from "solid-js";

const NavBar = () => {
  const [showNav, setShowNav] = createSignal(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav class={`navigation${showNav() ? " visible" : ""}`}>
      <ul>
        <li>
          <a href="#">
            <span class="monogreen">01.</span> About
          </a>
        </li>
        <li>
          <a href="#">
            <span class="monogreen">02.</span> Projects
          </a>
        </li>
        <li>
          <a href="#">
            <span class="monogreen">03.</span> Experience
          </a>
        </li>
        <li>
          <a href="#">
            <span class="monogreen">04.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
