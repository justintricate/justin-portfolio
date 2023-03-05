import { createSignal, createEffect } from "solid-js";

const NavBar = () => {
  let [lastScroll, setLastScroll] = createSignal(0);
  const body = document.body;

  createEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }
      if (
        currentScroll > Number(lastScroll) &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < Number(lastScroll) &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      setLastScroll(currentScroll);
    });
  }, []);

  return (
    <header>
      <ul class="navigation">
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
    </header>
  );
};

export default NavBar;
