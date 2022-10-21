import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import folder from "../assets/folder2.png";
import file from "../assets/file.png";
import Icon from "./Icon";
import Draggable from "react-draggable";

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
  const [fullScreen, setFullScreen] = useState("");
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState({ display: "flex" });
  const nodeRef = useRef();
  const handleIconClick = (e, name) => {
    e.stopPropagation();
    // if (name === "planet facts") {
    //   planetRef.current.style.display = "block";
    // } else if (name === "invoice app") {
    //   invoiceRef.current.style.display = "block";
    // }

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

  const dragStart = (e) => {
    handleClick("Projects");
    console.log(e.currentTarget.getBoundingClientRect().left);
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setIsDragging(true);
  };

  const dragging = (e) => {
    const left = e.screenX - diffX;
    const top = e.screenY - diffY;

    if (isDragging && fullScreen !== "fullScreen") {
      setStyles({ left: left, top: top });
    }
  };
  const dragEnd = (e) => {
    setIsDragging(false);
    console.log("up");
  };

  const bodyClick = (e) => {
    e.stopPropagation();
    handleClick("Bio");
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
      style={fullScreen === "fullScreen" ? { left: "0", top: "0" } : styles}
      onPointerDown={(e) => dragStart(e)}
      onPointerMove={(e) => dragging(e)}
      onPointerUp={(e) => dragEnd(e)}
      data-testid="projectsWindow"
      ref={nodeRef}
      ref={projectRef}
      className={
        selected === "Projects" ? `Projects top  ${fullScreen}` : "Projects"
      }
    >
      <nav data-testid="nav" className="windowNav">
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
      <div
        onClick={handleClick}
        onPointerDown={(e) => bodyClick(e)}
        onPointerMove={(e) => dragging(e)}
        onPointerUp={(e) => dragEnd(e)}
        className="projectsBody"
      >
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
