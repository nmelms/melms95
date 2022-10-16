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
  const handleIconClick = (e, name) => {
    e.stopPropagation();
    console.log(name);
    if (!pages.includes(name)) {
      setPages([...pages, name]);
      setSelected(name);
      console.log(selected);
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
            handleClick={(e) => handleIconClick(e, "national parks")}
            name="National Parks"
            imgSrc={file}
            alt="national parks project"
          />
          <Icon
            handleClick={(e) => handleIconClick(e, "invoice app")}
            name="Invoice App"
            imgSrc={file}
            alt="invoice project"
          />
          <Icon
            key={"planet facts"}
            handleClick={(e) => handleIconClick(e, "planet facts")}
            name="Planet Facts"
            imgSrc={file}
            alt="planet facts project"
          />
        </div>
      </div>
    </Draggable>
  );
}
