import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import Draggable from "react-draggable";
import file from "../assets/file.png";
import screenShot from "../assets/carouselScreenShot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

export default function CarouselProject({ pages, setPages }) {
  const {
    // setDiffX,
    // setDiffY,
    carouselRef,
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
    setSelected("Carousel");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Carousel");
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
    carouselRef.current.style.display = "none";
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
      id="carouselProject"
      ref={carouselRef}
      className={
        selected === "Carousel" ? `npsProject top  ${fullScreen}` : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Fancy Carousel</p>
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
        <h1>Fancy Carousel</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={screenShot}
        />
        <h2>About This Project</h2>
        <p>
          This is a carousel project I created to really put my frontend skills
          to the test. I created a cool slider animation using GSAP, Bootstrap
          and React. In GSAP I used the FLIP plugin to make make these heavy
          animations seamless and smooth. A slight delay is added to the the
          card components to give a wave like appearance when then cards are
          moved. Have fun playing around with this carousel and check out the
          source if you're curious how I built it!
        </p>
        <div className="icons">
          <a target="_blank" href="https://github.com/Nmelms/planets">
            <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
          </a>
          <a target="_blank" href="https://carousel.nickmelms.dev/">
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
