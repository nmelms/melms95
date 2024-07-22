import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import myComputer from "../assets/mycomputer.png";
import pic from "../assets/me.jpg";
import Draggable from "react-draggable";
import jsSVG from "../assets/js.svg";
import reactSVG from "../assets/react.svg";
import htmlSVG from "../assets/html.svg";
import cssSVG from "../assets/css.svg";
import firebaseSVG from "../assets/firebase.svg";
import jestSVG from "../assets/jest.svg";
import { useDrag } from "@use-gesture/react";

export default function Window({ pages, setPages, display }) {
  const nodeRef = useRef();
  const { bioRef, selected, setSelected } = useContext(GlobalContext);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState("");

  const bindWindowPos = useDrag((params) => {
    setWindowPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const handleClick = () => {
    setSelected("Bio");
  };

  const handleCloseClick = (e) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Bio");
    setPages(filtered);

    if (bioRef.current.classList.contains("fullScreen")) {
      bioRef.current.classList.remove("fullScreen");
      bioRef.current.style.display = "none";
    }
  };

  const handleFullScreenClick = () => {
    bioRef.current.classList.toggle("fullScreen");
  };

  const handleMinimizeClick = (e) => {
    bioRef.current.style.display = "none";
    setSelected("");
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
      ref={bioRef}
      data-testid="Window"
      className={selected === "Bio" ? `Bio top  ${fullScreen}` : "Bio"}
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={myComputer} />
          <p>My Bio</p>
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
            onClick={(event) => handleCloseClick(event)}
            className="navBtn"
          >
            X
          </button>
        </div>
      </nav>
      <div className="bioMain">
        <img className="selfie" src={pic} />
        <h1>Nick Melms</h1>
        <h2>Front-End Web Developer </h2>

        <h2 className="bioTitle">
          <b>
            <u>About Me</u>
          </b>
        </h2>
        <p>
          I'm Nick, a front-end web developer currently working at a marketing
          agency in Charlotte, NC. I specialize in maintaining and enhancing
          multiple client websites in the manufacturing industry, utilizing
          Craft CMS and Twig templating language. Additionally, I have
          experience with various other technologies, including React and
          Next.js. Feel free to explore my portfolio and check out the projects
          I've created. If you have any questions or just want to chat feel free
          to shoot me an email!
        </p>
        <h2 className="bioTitle">
          <b>
            <u>Skills</u>
          </b>
        </h2>
        <div className="logos">
          <img alt="react " className="techLogo" src={reactSVG} />
          <img alt="javascript " className="techLogo" src={jsSVG} />
          <img alt="jest " className="techLogo" src={jestSVG} />
          <img alt="firebase " className="techLogo" src={firebaseSVG} />
          <img alt="html " className="techLogo" src={htmlSVG} />
          <img alt="css " className="techLogo" src={cssSVG} />
        </div>
        <div className="techText">
          <p>React/Javascript/Jest/Firebase/HTML/CSS</p>
        </div>
      </div>
    </div>
  );
}
