import React, { useState, useRef } from "react";
import Time from "./Time";
import windowsIcon from "../assets/windowsIcon.png";

export default function StartBar({ setShowMenu, showMenu }) {
  const btnRef = useRef();
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
    setShowMenu(!showMenu);
    btnRef.current.classList.toggle("pressed");
  };

  return (
    <div className="startBar">
      <button ref={btnRef} className="startBtn" onClick={handleClick}>
        <div className="btnContentWrapper">
          <img className="startBtnIcon" src={windowsIcon} />
          Start
        </div>
      </button>
      <div data-testid="clock" className="clock">
        <Time />
      </div>
    </div>
  );
}
