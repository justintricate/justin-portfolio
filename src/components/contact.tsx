import { email } from "../config.js";

const Contact = () => {
  return (
    <div>
      <h1 style={{ color: "#ccd6f6" }}>
        <span class="monogreen">04.</span> Contact
      </h1>
      <h2>Get In Touch</h2>
      <p>
        I am currently searching for new opportunities, and would love to chat.
        Drop me a note and I will get back to you!
      </p>
      <a href={`mailto:${email}`}>
        <button>Say Hello</button>
      </a>
    </div>
  );
};

export default Contact;
