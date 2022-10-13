import React, { useRef } from "react";
import nps from "../assets/npsScreenShot.png";
import file from "../assets/file.png";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NpsProject({ selected, setSelected }) {
  const nodeRef = useRef();
  const handleClick = () => {
    setSelected("national parks");
  };
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        onClick={handleClick}
        className={
          selected === "national parks" ? "npsProject top" : "npsProject"
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
              // onClick={(event) => handleCloseClick(event)}
              className="navBtn"
            >
              O
            </button>
            <button
              // onClick={(event) => handleCloseClick(event)}
              className="navBtn"
            >
              X
            </button>
          </div>
        </nav>
        <h1>Explore National Parks</h1>
        <img className="screenShot" src={nps} />
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
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a href="https://nmelmsnps.netlify.app/">
            <FontAwesomeIcon size="2x" icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </Draggable>
  );
}
