import React, { useState, useRef } from "react";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import Icon from "./Icon";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";
import Window from "./Window";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);
  const [pages, setPages] = useState([]);

  const windowRef = useRef();

  const handleBioClick = () => {
    setPages([...pages, "Bio"]);
  };

  return (
    <div className="homeScreen">
      <StartBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <StartMenu />}
      <div className="desktop">
        <Icon
          handleClick={handleBioClick}
          name="My Bio"
          alt="bio"
          imgSrc={mycomputer}
        />
        <Icon name="Recycle Bin" alt="recycle bin" imgSrc={recycle} />
      </div>
      {pages.includes("Bio") && <Window pages={pages} setPages={setPages} />}
    </div>
  );
}
