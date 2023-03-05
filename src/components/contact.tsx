import { email } from "../config.js";

const Contact = () => {
  return (
    <div class="component" style={{ "margin-bottom": "30%" }}>
      <h1 style={{ color: "#ccd6f6" }}>
        <span class="monogreen">04.</span> Contact
      </h1>
      <h2>Get In Touch</h2>
      <p>
        I am currently searching for new opportunities, and would love to chat.
        Whether you have a question, a project in mind, or just want to say hi,
        feel free to drop me a note and I'll get back to you as soon as I can!
      </p>
      <a href={`mailto:${email}`}>
        <button>Say Hello</button>
      </a>
    </div>
  );
};

export default Contact;
