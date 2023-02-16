import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="l-hero">
        <div className="h-title">
          <span>Don't give me the fish</span>
          <span>but teach me to fish.</span>
          <span>
            Hi, I’m Onur. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </span>
        </div>
        <div className="wrap">
          <a>
            <button className="hero-button">Hire Me</button>
          </a>

          <a
            href="https://github.com/Onur-DEMR"
            target="_blank"
            rel="noreferrer">
            <button className="button-h">
              <FaGithub />
              Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/onur-demir-789109213/"
            target="_blank"
            rel="noreferrer">
            <button className="button-h">
              <FaLinkedin />
              Linkedin
            </button>
          </a>
        </div>
      </div>
      <div className="r-hero">
        <img className="image" src="./profile.jpg" alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
