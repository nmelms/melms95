import React, { useRef } from "react";
import myComputer from "../assets/mycomputer.png";
import Draggable from "react-draggable";

export default function Window({ pages, setPages }) {
  const handleCloseClick = () => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Bio");
    setPages(filtered);
  };
  const nodeRef = useRef();

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} data-testid="Window" className="window ">
        <nav className="windowNav">
          <div className="nameAndIcon">
            <img style={{ height: "18px" }} src={myComputer} />
            <p>My Bio</p>
          </div>
          <div className="windowNavBtns">
            <button onClick={handleCloseClick} className="navBtn">
              _
            </button>
            <button onClick={handleCloseClick} className="navBtn">
              O
            </button>
            <button onClick={handleCloseClick} className="navBtn">
              X
            </button>
          </div>
        </nav>
      </div>
    </Draggable>
  );
}
