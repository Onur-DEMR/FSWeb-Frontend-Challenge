import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <div>
      <h2 className="title">Projects</h2>
      <div className="projects">
        <div className="project">
          <img src="./cal.png" alt="img" />
          <h3 className="subtitle">Calculator</h3>
          <p className="text">In this project, a simple calculator is made.</p>
          <div className="r-button">
            <button className="button">Jsx</button>
            <button className="button">React</button>
            <button className="button">Redux</button>
          </div>
          <div className="links">
            <a
              href="https://github.com/Onur-DEMR/fsweb-s10g1-reducer-calculator"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://fsweb-s10g1-reducer-calculator-flax.vercel.app/"
              target="_blank"
              rel="noreferrer">
              View Site
            </a>
          </div>
        </div>
        <div className="project">
          <img src="./film.png" alt="img" />
          <h3 className="subtitle">Films</h3>
          <p className="text">In this project, a simple movie list created.</p>
          <div className="r-button">
            <button className="button">Jsx</button>
            <button className="button">React</button>
            <button className="button">Redux</button>
          </div>
          <div className="links">
            <a
              href="https://github.com/Onur-DEMR/fsweb-s10g2-redux-filmler"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://fsweb-s10g2-redux-filmler-ebon.vercel.app/movies"
              target="_blank"
              rel="noreferrer">
              View Site
            </a>
          </div>
        </div>
        <div className="project">
          <img src="./list.png" alt="img" />
          <h3 className="subtitle">Watch List</h3>
          <p className="text">
            A simple movie watch list made in this project.
          </p>
          <div className="r-button">
            <button className="button">Jsx</button>
            <button className="button">React</button>
            <button className="button">Redux</button>
          </div>
          <div className="links">
            <a
              href="https://github.com/Onur-DEMR/fsweb-s10g3-redux-watchlist"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://fsweb-s10g3-redux-watchlist-nine.vercel.app/"
              target="_blank"
              rel="noreferrer">
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
