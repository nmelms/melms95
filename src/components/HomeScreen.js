import React, { useState, useRef, createRef, useContext } from "react";
import GlobalContext from "../GlobalContext";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import Icon from "./Icon";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";
import folder from "../assets/folder2.png";
import mine from "../assets/mine.png";
import Window from "./Window";
import Projects from "./Projects";
import NpsProject from "./NpsProject";
import InvoiceProject from "./InvoiceProject";
import PlanetProject from "./PlanetProject";
import MineSweeper from "./minesweeper/MineSweeper";
import MtgProject from "./MtgProject";
import BurgerProject from "./BurgerProject";
import Pokedex from "./Pokedex";

export default function HomeScreen() {
  const { pages, setPages, selected, setSelected } = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);
  const [activePages, setActivePages] = useState([]);

  const appHeight = () =>
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  window.addEventListener("resize", appHeight);
  appHeight();

  const windowRef = useRef();

  const handleClick = (ref, name) => {
    setSelected(name);
    if (!pages.includes(name)) {
      setPages([...pages, name]);
    }
  };

  return (
    <div className="homeScreen">
      <StartBar pages={pages} showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <StartMenu />}
      <div className="desktop">
        <Icon
          handleClick={(e) => handleClick(e, "Bio")}
          name="My Bio"
          alt="bio"
          imgSrc={mycomputer}
        />
        <Icon name="Recycle Bin" alt="recycle bin" imgSrc={recycle} />
        <Icon
          handleClick={(e) => handleClick(e, "Projects")}
          name="Projects"
          alt="projects"
          imgSrc={folder}
        />
        <Icon
          handleClick={(e) => handleClick(e, "Minesweeper")}
          name="Minesweeper"
          alt="Minesweeper"
          imgSrc={mine}
        />
      </div>

      {pages.includes("Bio") && (
        <Window
          display={pages.includes("Bio") ? "flex" : "none"}
          selected={selected}
          handleClick={() => handleClick("Bio")}
          pages={pages}
          setPages={setPages}
          activePages={activePages}
          setActivePages={setActivePages}
        />
      )}

      {pages.includes("Projects") && (
        <Projects
          display={pages.includes("Projects") ? "flex" : "none"}
          selected={selected}
          handleClick={() => handleClick("Projects")}
          setSelected={setSelected}
          pages={pages}
          setPages={setPages}
        />
      )}
      {pages.includes("National Parks") && (
        <NpsProject
          display={pages.includes("National Parks") ? "block" : "none"}
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("Invoice App") && (
        <InvoiceProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("Planet Facts") && (
        <PlanetProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("Minesweeper") && (
        <MineSweeper
          display={pages.includes("Minesweeper") ? "flex" : "none"}
          selected={selected}
          handleClick={() => handleClick("MineSweeper")}
          pages={pages}
          setPages={setPages}
          activePages={activePages}
          setActivePages={setActivePages}
        />
      )}
      {pages.includes("MTG Deck Builder") && (
        <MtgProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("Burger") && (
        <BurgerProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("Pokedex") && (
        <Pokedex
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
}
