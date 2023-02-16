import React from "react";
import "./Skills.css";
import SkillsData from "./SkillsData";

const Skills = () => {
  const skills = SkillsData.map((item, index) => {
    return (
      <div key={index} className="skill">
        <div className="s-name">{item.skill}</div>
        <div className="s-text">{item.text}</div>
      </div>
    );
  });
  return (
    <div>
      <h2 className="title">Skills</h2>
      <div className="skills">{skills}</div>
    </div>
  );
};

export default Skills;
