import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <h2>Let us Take Your Problem</h2>
        <input type="text" id="name" required placeholder="Username" />

        <input type="email" id="mail" required placeholder="Email Address" />

        <input type="desc" id="detail" placeholder="Enter Your Problem" />

        <button type="submit">Send</button>
        <p></p>
      </form>
    </div>
  );
};

export default Contact;
