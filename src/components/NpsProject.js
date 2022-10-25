import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import nps from "../assets/npsScreenShot.png";
import file from "../assets/file.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";

export default function NpsProject() {
  const { planetRef, selected, setSelected, pages, setPages, npsRef, display } =
    useContext(GlobalContext);
  const [fullScreen, setFullScreen] = useState("");
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  const bindWindowPos = useDrag((params) => {
    setWindowPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const handleClick = () => {
    setSelected("National Parks");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "National Parks");
    setPages(filtered);
    if (npsRef.current.classList.contains("fullScreen")) {
      npsRef.current.classList.remove("fullScreen");
      npsRef.current.style.display = "none";
    }
  };
  const handleFullScreenClick = () => {
    npsRef.current.classList.toggle("fullScreen");
  };
  const handleMinimizeClick = (e) => {
    e.stopPropagation();
    setSelected("");
    npsRef.current.style.display = "none";
  };
  const miniDown = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onPointerDown={handleClick}
      style={{
        display: display,
        left: windowPosition.x,
        top: windowPosition.y,
      }}
      ref={npsRef}
      className={
        selected === "National Parks"
          ? `npsProject top ${fullScreen}`
          : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>National Parks</p>
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
          <button
            data-testid="npsClose"
            onClick={(event) => handleCloseClick(event)}
            className="navBtn"
          >
            X
          </button>
        </div>
      </nav>
      <div className="projectBody">
        <h1>Explore National Parks</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={nps}
        />

        <h2>About This Project</h2>
        <p>
          This is a project I designed and created using the National Park
          Service API. In this project I use fetch to retreive data from the NPS
          API and display it using React. You can view active webcams as well as
          indiviual park info such as entrance fees and park location. Have fun
          exploring America's National Parks!
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
    </div>
  );
}
