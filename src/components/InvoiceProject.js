import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import file from "../assets/file.png";
import screenShot from "../assets/invoiceScreenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";

export default function InvoiceProject() {
  const { selected, setSelected, pages, setPages, invoiceRef } =
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
  const handleMinimizeClick = (e) => {
    e.stopPropagation();
    setSelected("");
    invoiceRef.current.style.display = "none";
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
      ref={invoiceRef}
      className={
        selected === "invoice app"
          ? `npsProject top ${fullScreen}`
          : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Invoice App</p>
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
