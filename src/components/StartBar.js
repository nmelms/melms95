import React, { useState, useRef, createRef } from "react";
import Time from "./Time";
import windowsIcon from "../assets/windowsIcon.png";

export default function StartBar({
  setShowMenu,
  showMenu,
  pages,
  setSelected,
  selected,
}) {
  const allItemRefs = useRef([]);
  allItemRefs.current = pages.map(
    (element, i) => allItemRefs.current[i] ?? createRef()
  );
  const btnRef = useRef();
  const iconRef = useRef();
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    // setPressed(!pressed);
    setShowMenu(!showMenu);
    btnRef.current.classList.toggle("pressed");
  };

  const handleIconClick = (ref, page) => {
    setSelected(page);
    ref.current.classList.toggle("pressed");
    ref.current.classList.toggle("openWindowIcon");
  };

  return (
    <div className="startBar">
      <button ref={btnRef} className="startBtn" onClick={handleClick}>
        <div className="btnContentWrapper">
          <img className="startBtnIcon" src={windowsIcon} />
          Start
        </div>
      </button>
      <div className="openWindows">
        {pages.map((page, index) => {
          return (
            <div
              ref={allItemRefs.current[index]}
              onClick={() => handleIconClick(allItemRefs.current[index], page)}
              className={
                selected === page
                  ? "openWindowIcon pressed"
                  : "openWindowIcon notPressed"
              }
            >
              {page}
            </div>
          );
        })}
      </div>
      <div data-testid="clock" className="clock">
        <Time />
      </div>
    </div>
  );
}
