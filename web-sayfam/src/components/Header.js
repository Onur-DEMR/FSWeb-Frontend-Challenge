import React from "react";
import "./Header.css";
import Toggle from "./Toggle";
const Header = () => {
  return (
    <div className="header">
      <div className="h-left">
        <div className="h-night">Dark Mode</div>
        <Toggle />
      </div>
      <div className="h-right">
        <div className="h-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Skills</li>
            <li>Profile</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className="h-button ">Hire Me</button>
      </div>
    </div>
  );
};

export default Header;
