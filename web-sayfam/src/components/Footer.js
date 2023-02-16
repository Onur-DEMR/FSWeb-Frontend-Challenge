import React, { useState } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cssd7eu",
        "template_u7x0aqr",
        form.current,
        "yP6xwJ_dVn4AsoKrz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="main">
      <div className="title">
        Let’s work together on <br></br>your next product.
      </div>
      <div className="f-links">
        <div className="contact">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thank you for sending a message."}</span>
          </form>
        </div>

        <div className="links">
          <a
            href="https://github.com/Onur-DEMR"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/onur-demir-789109213/"
            target="_blank"
            rel="noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
