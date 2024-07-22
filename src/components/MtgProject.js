import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import file from "../assets/file.png";
import screenShot from "../assets/mtgScreenShot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";

export default function MtgProject({ pages, setPages }) {
  const { mtgRef, selected, setSelected } = useContext(GlobalContext);

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
    setSelected("MTG Deck Builder");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "MTG Deck Builder");
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
    mtgRef.current.style.display = "none";
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
          : { left: windowPosition.x, top: windowPosition.y, display: "block" }
      }
      id="Mtg"
      ref={mtgRef}
      className={
        selected === "MTG Deck Builder"
          ? `npsProject top  ${fullScreen}`
          : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>MTG Deck Builder</p>
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
        <h1>MTG Deck Builder</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={screenShot}
        />
        <h2>About This Project</h2>
        <p>
          In this project I created a deck builder for the trading card game
          "Magic: The Gathering". This was created using vanilla Javascript and
          Bootstrap. I fetch data from the Scryfall API and save the deck
          information into the user's local storage. I plan to add on Firebase
          as a backend and allow users to save multiple decks under their
          accounts. Feel free to add cards to your deck or if you have no idea
          how to play the game you can check out some of the amazing artwork!
        </p>
        <div className="icons">
          <a target="_blank" href="https://github.com/Nmelms/deck_builder">
            <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
          </a>
          <a target="_blank" href="https://mtgdeckbuilder.netlify.app/">
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
