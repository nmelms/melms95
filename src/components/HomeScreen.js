import React, { useState } from "react";
import StartBar from "./StartBar";
import StartMenu from "./StartMenu";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="homeScreen">
      <StartBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <StartMenu />}
    </div>
  );
}
