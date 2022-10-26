import React from "react";
import Tile from "./Tile";
import Bomb from "./Bomb";
import { getByTitle } from "@testing-library/dom";

export default function MineSweeper() {
  const row = 10;
  const col = 10;

  const numOfBombs = 20;
  const gameBoard = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      gameBoard.push({ value: "", x: i, y: j });
    }
  }

  const handleTileClick = (tile) => {
    console.log("x: " + tile.x);
    console.log("y: " + tile.y);
  };

  const placeBombs = () => {
    const bombsArr = [];
    for (let i = 0; i < numOfBombs; i++) {
      const num = Math.floor(Math.random() * (99 - 0 + 1) + 0);
      if (!bombsArr.includes(num)) {
        bombsArr.push(num);
      }
    }
    for (let i = 0; i < bombsArr.length; i++) {
      gameBoard[bombsArr[i]].value = "x";
    }
  };

  placeBombs();

  console.log(gameBoard);

  return (
    <div className="gameBoard">
      {gameBoard.map((tile) => {
        return (
          <div
            onClick={() => handleTileClick(tile)}
            className="tile"
            style={{ color: "white" }}
          >
            {tile.value}
          </div>
        );
      })}
    </div>
  );
}
