import { email } from "../config.js";

const Contact = () => {
  return (
    <div
      class="component centered"
      style={{ "margin-bottom": "45%" }}
      id="contact"
    >
      <h1 style={{ color: "#ccd6f6", "margin-bottom": "5%" }}>
        <span class="monogreen">04.</span> Contact
      </h1>
      <h2 class="centered">Get In Touch</h2>
      <p class="centered" style={{ "margin-inline": "20%" }}>
        I am currently searching for new opportunities, and would love to chat.
        Whether you have a question, a project in mind, or just want to say hi,
        feel free to drop me a note-- I'll get back to you as soon as I can!
      </p>
      <a href={`mailto:${email}`}>
        <button class="centered" style={{ "margin-top": "4%" }}>
          Say Hello
        </button>
      </a>
    </div>
  );
};

export default Contact;
