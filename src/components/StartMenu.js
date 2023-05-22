import React from "react";
import sidebarImg from "../assets/sidebarImg.png";
import shutdown from "../assets/shutdown.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.png";
import folder from "../assets/folder.png";
import pdf from "../assets/Resume.pdf";

export default function StartMenu() {
  return (
    <div className="startMenu" data-testid="startMenu">
      <div className="startMenuText">
        <img alt="windows 95 logo" src={sidebarImg} />
      </div>

      <div className="programs">
        <a href={pdf}>
          <div className="program">
            <img alt="folder icon" src={folder} />
            <u>R</u>esume
          </div>
        </a>
        <a href="mailto: nmelms92@gmail.com">
          <div className="program">
            <img alt="email icon" src={email} />
            <u>E</u>mail
          </div>
        </a>
        <a href="https://github.com/Nmelms">
          <div className="program">
            <img alt="github icon" src={github} />
            <u>G</u>ithub
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nick-melms-b66300223/">
          <div
            style={{ borderBottom: "2px outset lightgray" }}
            className="program"
          >
            <img alt="linkedin icon" src={linkedin} />
            <u>L</u>inkedin
          </div>
        </a>
        <div className="shutdown">
          <img alt="shutdown icon" src={shutdown} />
          Sh<u>u</u>t Down...
        </div>
      </div>
    </div>
  );
}
