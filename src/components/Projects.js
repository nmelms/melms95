import React, { useRef } from "react";
import folder from "../assets/folder2.png";
import Draggable from "react-draggable";

export default function Projects({ selected, handleClick }) {
  const nodeRef = useRef();
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        onClick={() => handleClick("Projects")}
        className={selected === "Projects" ? "projects top" : "projects"}
      >
        <nav data-testid="nav" className="windowNav">
          <div className="nameAndIcon">
            <img style={{ height: "18px" }} src={folder} />
            <p>Projects</p>
          </div>
          <div className="windowNavBtns">
            <button
              // onClick={(event) => handleCloseClick(event)}
              className="navBtn"
            >
              _
            </button>
            <button
              // onClick={(event) => handleCloseClick(event)}
              className="navBtn"
            >
              O
            </button>
            <button
              // onClick={(event) => handleCloseClick(event)}
              className="navBtn"
            >
              X
            </button>
          </div>
        </nav>
      </div>
    </Draggable>
  );
}
