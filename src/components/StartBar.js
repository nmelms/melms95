import React, { useState } from "react";
import Time from "./Time";
import windowsIcon from "../assets/windowsIcon.png";

export default function StartBar({ setShowMenu, showMenu }) {
  return (
    <div className="startBar">
      <button className="startBtn" onClick={() => setShowMenu(!showMenu)}>
        <img className="startBtnIcon" src={windowsIcon} />
        Start
      </button>
      <div data-testid="clock" className="clock">
        <Time />
      </div>
    </div>
  );
}
