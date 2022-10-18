import React, { useRef, useState } from "react";
import myComputer from "../assets/mycomputer.png";
import pic from "../assets/me.jpg";
import Draggable from "react-draggable";
import jsSVG from "../assets/js.svg";
import reactSVG from "../assets/react.svg";
import htmlSVG from "../assets/html.svg";
import cssSVG from "../assets/css.svg";
import firebaseSVG from "../assets/firebase.svg";
import jestSVG from "../assets/jest.svg";

export default function Window({ pages, setPages, handleClick, selected }) {
  const nodeRef = useRef();
  const [fullScreen, setFullScreen] = useState("");
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState();
  const [pos, setPos] = useState();

  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Bio");
    setPages(filtered);
  };
  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };

  //All the logic to make the window draggable
  const dragStart = (e) => {
    handleClick("Bio");
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
      data-testid="Window"
      className={selected === "Bio" ? `window top  ${fullScreen}` : "window"}
    >
      <nav className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={myComputer} />
          <p>My Bio</p>
        </div>
        <div className="windowNavBtns">
          <button
            onClick={(event) => handleCloseClick(event)}
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
      <section className="bioMain">
        <img className="selfie" src={pic} />
        <h1>Nick Melms</h1>
        <h2>Front-end Web Developer </h2>

        <h2 className="bioTitle">
          <b>About Me</b>
        </h2>
        <p>
          I'm Nick, a front-end web developer. I make responsive web
          applications that look good and are easy to use. I enjoy keeping up
          with the latest technologies and use React to build the majority of my
          sites. When I'm not coding, I enjoy exploring the outdoors.
        </p>
        <h2 className="bioTitle">
          <b>Skills</b>
        </h2>
        <div className="logos">
          <img alt="react " className="techLogo" src={reactSVG} />
          <img alt="javascript " className="techLogo" src={jsSVG} />
          <img alt="jest " className="techLogo" src={jestSVG} />
          <img alt="firebase " className="techLogo" src={firebaseSVG} />
          <img alt="html " className="techLogo" src={htmlSVG} />
          <img alt="css " className="techLogo" src={cssSVG} />
        </div>
        <p>React/Javascript/Jest/fireBase/HTML/CSS</p>
      </section>
    </div>
  );
}
