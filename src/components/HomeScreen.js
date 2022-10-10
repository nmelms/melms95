import React, { useState } from "react";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";
import recycle from "../assets/recycle.png";
import mycomputer from "../assets/mycomputer.png";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="homeScreen">
      <StartBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <StartMenu />}
      <div className="desktop">
        <img
          alt="bio"
          style={{ height: "50px", width: "50px" }}
          src={mycomputer}
        />
        <img
          alt="recycle bin"
          style={{ height: "50px", width: "50px" }}
          src={recycle}
        />
      </div>
    </div>
  );
}
