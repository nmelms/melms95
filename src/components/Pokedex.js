import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import file from "../assets/file.png";
import screenShot from "../assets/pokedexScreenShot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";

export default function MtgProject({ pages, setPages }) {
  const { pokeRef, selected, setSelected } = useContext(GlobalContext);

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
    setSelected("Pokedex");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "Pokedex");
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
    pokeRef.current.style.display = "none";
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
      id="Pokedex"
      ref={pokeRef}
      className={
        selected === "Pokedex" ? `npsProject top  ${fullScreen}` : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Pokedex</p>
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
        <h1>Pokedex</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={screenShot}
        />
        <h2>About This Project</h2>
        <p>
          This app was designed to allow users to view and learn about the first
          151 Pokemon in the popular franchise. The design for the app was
          provided to me in a Figma file, and I worked on implementing it using
          the PokeAPI to fetch the data. This Pokedex app has been designed with
          both aesthetics and usability in mind, resulting in a visually
          pleasing and intuitive interface. With this app, users can easily view
          more information about individual Pokemon by simply clicking on them.
          The app also has a filter function to allow users to search for a
          specific Pokemon. Currently, the app only includes data for the first
          151 Pokemon, but I hope to expand the app to include all Pokemon in
          the future and add the ability to sort them by generation.
        </p>
        <div className="icons">
          <a href="https://github.com/Nmelms/pokedex">
            <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
          </a>
          <a href="https://nmpokedex.netlify.app/">
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
