import React from "react";

export default function Tile({ id, gameBoard, shuffledArr }) {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return <div id={id} className="tile" onClick={(e) => handleClick(e)}></div>;
}
