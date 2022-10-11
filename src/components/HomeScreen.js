import React, { useState } from "react";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import Icon from "./Icon";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="homeScreen">
      <StartBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <StartMenu />}
      <div className="desktop">
        <Icon name="My Bio" alt="bio" imgSrc={mycomputer} />
        <Icon name="Recycle Bin" alt="recycle bin" imgSrc={recycle} />
      </div>
    </div>
  );
}
