import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import Draggable from "react-draggable";
import file from "../assets/file.png";
import screenShot from "../assets/planetScreenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

export default function PlanetProject({ pages, setPages }) {
  const {
    // setDiffX,
    // setDiffY,
    planetRef,
    selected,
    setSelected,
  } = useContext(GlobalContext);

  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState("");

  const [styles, setStyles] = useState({
    display: "block",
    left: windowPosition.x,
    top: windowPosition.y,
  });

  const bindWindowPos = useDrag((params) => {
    setWindowPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const handleClick = () => {
    setSelected("Planet Facts");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Planet Facts");
    setPages(filtered);
  };
  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };

  const handleMinimizeClick = (e) => {
    e.stopPropagation();
    setSelected("");
    planetRef.current.style.display = "none";
  };
  const miniDown = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onPointerDown={handleClick}
      style={
        fullScreen === "fullScreen"
          ? { left: "0", top: "0" }
          : { left: windowPosition.x, top: windowPosition.y }
      }
      id="planetProject"
      ref={planetRef}
      className={
        selected === "Planet Facts"
          ? `npsProject top  ${fullScreen}`
          : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Planet Facts</p>
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
        <h1>Planet Facts</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={screenShot}
        />
        <h2>About This Project</h2>
        <p>
          This app displays planet facts from Wikipedia. You can choose a planet
          in our solar system and view facts on the structure and surface of the
          planet. The design was provided to me via a Figma file and I created
          it with React for the front-end. Have fun exploring and learning more
          about our solar system!
        </p>
        <div className="icons">
          <a href="https://github.com/Nmelms/planets">
            <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
          </a>
          <a href="https://nmelmsplanetfacts.netlify.app/">
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
