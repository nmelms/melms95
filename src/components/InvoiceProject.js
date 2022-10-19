import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import file from "../assets/file.png";
import screenShot from "../assets/invoiceScreenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function InvoiceProject({
  selected,
  setSelected,
  pages,
  setPages,
}) {
  const [fullScreen, setFullScreen] = useState("");
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState();
  const nodeRef = useRef();
  const handleClick = () => {
    setSelected("invoice app");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "invoice app");
    setPages(filtered);
  };
  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };
  //All the logic to make the window draggable
  const dragStart = (e) => {
    handleClick();
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
      onPointerDown={(e) => dragStart(e)}
      onPointerMove={(e) => dragging(e)}
      onPointerUp={(e) => dragEnd(e)}
      ref={nodeRef}
      className={
        selected === "invoice app"
          ? `npsProject top ${fullScreen}`
          : "npsProject"
      }
    >
      <nav className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Invoice App</p>
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
      <h1>Invoice App</h1>
      <img
        alt="screen shot of National Parks project"
        className="screenShot"
        src={screenShot}
      />
      <h2>About This Project</h2>
      <p>
        This is a full stack CRUD app I created using React and Firebase.
        Crrently everyone using the app shares the same database but I plan on
        adding a sign in feature so you can keep track of of your own clients.
        In this app you can create and track invoices and have full CRUD
        ability. This design was provided to me via a Figma file and I buit the
        rest myself.
      </p>
      <div className="icons">
        <a href="https://github.com/Nmelms/invoice-app">
          <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
        </a>
        <a href="https://nmelmsinvoice.netlify.app/">
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
