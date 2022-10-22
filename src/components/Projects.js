import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import folder from "../assets/folder2.png";
import file from "../assets/file.png";
import Icon from "./Icon";
import { useDrag } from "@use-gesture/react";

export default function Projects({ handleClick, pages, setPages }) {
  const {
    projectRef,
    visiblePages,
    setVisiblePages,
    planetRef,
    invoiceRef,
    selected,
    setSelected,
  } = useContext(GlobalContext);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState("");

  const bindWindowPos = useDrag((params) => {
    setWindowPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const handleIconClick = (e, name) => {
    e.stopPropagation();
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

  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };

  const handleMinimizeClick = (e) => {
    projectRef.current.style.display = "none";
    setSelected("");
  };

  const miniDown = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleClick}
      style={
        fullScreen === "fullScreen"
          ? { left: "0", top: "0" }
          : { left: windowPosition.x, top: windowPosition.y }
      }
      data-testid="projectsWindow"
      ref={projectRef}
      className={
        selected === "Projects" ? `Projects top  ${fullScreen}` : "Projects"
      }
    >
      <nav {...bindWindowPos()} data-testid="nav" className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={folder} />
          <p>Projects</p>
        </div>
        <div className="windowNavBtns">
          <button
            onClick={(event) => handleMinimizeClick(event)}
            onPointerDown={(e) => miniDown(e)}
            className="navBtn"
          >
            _
          </button>
          <button
            onClick={(event) => handleFullScreenClick(event)}
            className="navBtn"
          >
            O
          </button>
          <button onClick={() => handleCloseClick()} className="navBtn">
            X
          </button>
        </div>
      </nav>
      <div onClick={handleClick} className="projectsBody">
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
          handleClick={(e) => handleIconClick(e, "planet facts")}
          name="Planet Facts"
          imgSrc={file}
          alt="planet facts project"
        />
      </div>
    </div>
  );
}
