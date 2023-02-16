import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <h2 className="title">Profile</h2>
      <div className="profile">
        <div className="l-profile">
          <h3 className="subtitle">Profile</h3>
          <div className="info">
            <div className="l-info">
              <p className="question">Date of Birth</p>
              <p className="question">City of Residence</p>
              <p className="question">Education Status</p>
              <p className="question">Preferred Role</p>
            </div>
            <div className="r-info">
              <p className="answer">12.02.1996</p>
              <p className="answer">Samsun</p>
              <p className="answer">Dokuz Eylul Uni.</p>
              <p className="answer">Frontend. UI</p>
            </div>
          </div>
        </div>
        <div className="r-profile">
          <h3 className="subtitle">About Me</h3>
          <p className="content">
            I have come to the end of the front end training I have received at
            workintech since November 2022 and this project is the last task
            given to me in the front-end training.
          </p>
          <p className="content">
            Since I am determined, disciplined and, most importantly, I am
            willing to push my own potential during learning stage; I believe
            that I can quickly adapt to my environment and add value to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
