//@ts-nocheck
import TypeIt from "typeit";
import { onCleanup } from "solid-js";

const Intro = () => {
  let text = [
    "craft intuitive user experiences.",
    "optimize for speed and performance.",
    "find solutions for complex problems.",
    "prioritize accessibility.",
    "build mobile-friendly designs.",
    "explore new technologies.",
  ];

  const typewriterEl = (el) => {
    // initialize TypeIt instance
    const typeit = new TypeIt(el, {
      strings: text,
      speed: 90,
      lifeLike: false,
      breakLines: false,
      cursorChar: "|",
      waitUntilVisible: true,
      nextStringDelay: [3000, 100],
      loop: true,
    }).go();

    onCleanup(() => {
      typeit.destroy();
    });
  };

  return (
    <div class="intro-container">
      <p class="monogreen">Hello! My name is</p>
      <h1>
        <div>
          <p class="name-style">Justin Wooley</p>
          <p class="subheader-style">
            I like to{" "}
            <span id="typewriter" ref={typewriterEl}>
              build things for the web.
            </span>
          </p>
        </div>
      </h1>
      <p class="intro-p-style">
        I am a full stack software engineer passionate about learning and
        <strong> crafting creative code with care</strong>. Currently looking
        for my next adventure. Let's connect!
      </p>
    </div>
  );
};

export default Intro;
