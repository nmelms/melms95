import React, { useRef } from "react";
import folder from "../assets/folder2.png";
import file from "../assets/file.png";
import Icon from "./Icon";
import Draggable from "react-draggable";

export default function Projects({
  setSelected,
  handleClick,
  pages,
  setPages,
  selected,
}) {
  const handleIconClick = (name) => {
    if (!pages.includes(name)) {
      setPages([...pages, name]);
      setSelected(name);
    } else {
      setSelected(name);
    }
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Projects");
    setPages(filtered);
  };
  const nodeRef = useRef();
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        data-testid="projectsWindow"
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
            <button onClick={() => handleCloseClick()} className="navBtn">
              X
            </button>
          </div>
        </nav>
        <div className="projectsBody">
          <Icon
            handleClick={() => handleIconClick("national parks")}
            name="National Parks"
            imgSrc={file}
            alt="national parks project"
          />
          <Icon
            handleClick={() => handleIconClick("invoice app")}
            name="Invoice App"
            imgSrc={file}
            alt="invoice project"
          />
          <Icon name="Planet Facts" imgSrc={file} alt="planet facts project" />
        </div>
      </div>
    </Draggable>
  );
}
