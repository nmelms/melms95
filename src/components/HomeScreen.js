import React, { useState, useRef, createRef, useContext } from "react";
import GlobalContext from "../GlobalContext";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import Icon from "./Icon";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";
import folder from "../assets/folder2.png";
import Window from "./Window";
import Projects from "./Projects";
import NpsProject from "./NpsProject";
import InvoiceProject from "./InvoiceProject";
import PlanetProject from "./PlanetProject";

export default function HomeScreen() {
  const {
    pages,
    setPages,
    visiblePages,
    setVisiblePages,
    selected,
    setSelected,
    dragging,
  } = useContext(GlobalContext);
  const [isDragging, setIsDragging] = useState(false);
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
  console.log(selected);
  const handleClick = (name) => {
    setSelected(name);
    if (!pages.includes(name)) {
      setPages([...pages, name]);
    }
  };

  return (
    <div className="homeScreen">
      <StartBar
        activePages={activePages}
        setActivePages={setActivePages}
        pages={pages}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {showMenu && <StartMenu />}
      <div className="desktop">
        <Icon
          handleClick={() => handleClick("Bio")}
          name="My Bio"
          alt="bio"
          imgSrc={mycomputer}
        />
        <Icon name="Recycle Bin" alt="recycle bin" imgSrc={recycle} />
        <Icon
          handleClick={() => handleClick("Projects")}
          name="Projects"
          alt="projects"
          imgSrc={folder}
        />
      </div>
      {pages.includes("Bio") && (
        <Window
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
          selected={selected}
          handleClick={() => handleClick("Projects")}
          setSelected={setSelected}
          pages={pages}
          setPages={setPages}
        />
      )}
      {pages.includes("national parks") && (
        <NpsProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("invoice app") && (
        <InvoiceProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      {pages.includes("planet facts") && (
        <PlanetProject
          pages={pages}
          setPages={setPages}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
}
