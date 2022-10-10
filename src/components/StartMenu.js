import React from "react";
import sidebarImg from "../assets/sidebarImg.png";
import shutdown from "../assets/shutdown.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.png";
import folder from "../assets/folder.png";

export default function StartMenu() {
  return (
    <div className="startMenu" data-testid="startMenu">
      <div className="startMenuText">
        <img alt="winows 95 logo" src={sidebarImg} />
      </div>

      <div className="programs">
        <div className="program">
          <img alt="folder icon" src={folder} />
          <u>R</u>esume
        </div>
        <div className="program">
          <img alt="email icon" src={email} />
          <u>E</u>mail
        </div>
        <div className="program">
          <img alt="github icon" src={github} />
          <u>G</u>ithub
        </div>
        <div
          style={{ borderBottom: "2px outset lightgray" }}
          className="program"
        >
          <img alt="linkedin icon" src={linkedin} />
          <u>L</u>inkedin
        </div>
        <div className="shutdown">
          <img alt="shutdown icon" src={shutdown} />
          Sh<u>u</u>t Down...
        </div>
      </div>
    </div>
  );
}
