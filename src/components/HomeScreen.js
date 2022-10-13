import React, { useState, useRef } from "react";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import Icon from "./Icon";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";
import folder from "../assets/folder2.png";
import Window from "./Window";
import Projects from "./Projects";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);
  const [pages, setPages] = useState([]);
  const [selected, setSelected] = useState("");

  const windowRef = useRef();

  const handleClick = (name) => {
    if (!pages.includes(name)) {
      setPages([...pages, name]);
      setSelected(name);
    } else {
      setSelected(name);
    }
  };

  return (
    <div className="homeScreen">
      <StartBar showMenu={showMenu} setShowMenu={setShowMenu} />
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
          selected={selected}
          pages={pages}
          setPages={setPages}
        />
      )}
      {pages.includes("Projects") && (
        <Projects
          handleClick={() => handleClick("Projects")}
          selected={selected}
          pages={pages}
          setPages={setPages}
        />
      )}
    </div>
  );
}
