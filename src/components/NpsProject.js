import React, { useRef, useState } from "react";
import nps from "../assets/npsScreenShot.png";
import file from "../assets/file.png";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NpsProject({ selected, setSelected, pages, setPages }) {
  const [fullScreen, setFullScreen] = useState("");
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState();
  const nodeRef = useRef();
  const handleClick = () => {
    setSelected("national parks");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "national parks");
    setPages(filtered);
  };
  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };
  //All the logic to make the window draggable
  const dragStart = (e) => {
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
  return (
    <div
      style={fullScreen === "fullScreen" ? { left: "0", top: "0" } : styles}
      onMouseDown={(e) => dragStart(e)}
      onMouseMove={(e) => dragging(e)}
      onMouseUp={(e) => dragEnd(e)}
      ref={nodeRef}
      onClick={handleClick}
      className={
        selected === "national parks"
          ? `npsProject top ${fullScreen}`
          : "npsProject"
      }
    >
      <nav className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>National Parks</p>
        </div>
        <div className="windowNavBtns">
          <button
            //onClick={(event) => handleCloseClick(event)}
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
          <button
            data-testid="npsClose"
            onClick={(event) => handleCloseClick(event)}
            className="navBtn"
          >
            X
          </button>
        </div>
      </nav>
      <h1>Explore National Parks</h1>
      <img
        alt="screen shot of National Parks project"
        className="screenShot"
        src={nps}
      />
      <h2>About This Project</h2>
      <p>
        This is a project I designed and created using the National Park Service
        API. In this project I use fetch to retreive data from the NPS API and
        display it using React. You can view active webcams as well as indiviual
        park info such as entrance fees and park location. Have fun exploring
        America's National Parks!
      </p>
      <div className="icons">
        <a href="https://github.com/Nmelms/national-parks">
          <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
        </a>
        <a href="https://nmelmsnps.netlify.app">
          <FontAwesomeIcon
            title="live project link"
            size="2x"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
}
