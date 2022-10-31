import React from "react";
import Tile from "./Tile";
import Bomb from "./Bomb";
import { getByTitle } from "@testing-library/dom";

export default function MineSweeper() {
  const row = 10;
  const col = 10;

  const numOfBombs = 40;
  const gameBoard = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      gameBoard.push({ value: "", x: i, y: j });
    }
  }

  const handleTileClick = (tile) => {
    console.log("x: " + tile.x);
    console.log("y: " + tile.y);
    console.log("value: " + tile.value);
  };

  const placeBombs = () => {
    const bombsArr = [];
    while (bombsArr.length < numOfBombs) {
      const num = Math.floor(Math.random() * (99 - 0 + 1) + 0);
      if (!bombsArr.includes(num)) {
        bombsArr.push(num);
      }
    }
    for (let i = 0; i < bombsArr.length; i++) {
      gameBoard[bombsArr[i]].value = "x";
    }
  };

  const setNumbers = () => {
    console.log(gameBoard[1]);
    gameBoard.map((tile, index) => {
      let bombCount = 0;
      //check above all tiles not on top row
      if (tile.x !== 0 && gameBoard[index - 10].value === "x") {
        if (tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      //check top right on all tiles not on top row
      if (tile.x !== 0 && gameBoard[index - 9].value === "x") {
        if (tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      // check to right of all tiles not on right side
      if (tile.y !== 9 && gameBoard[index + 1].value === "x") {
        if (tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      //check bottom right of all tiles not on right side
      if (tile.x !== 9 && tile.y !== 9) {
        if (gameBoard[index + 11].value === "x" && tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      //check below every tile not on bottom row
      if (tile.x !== 9 && gameBoard[index + 10].value === "x") {
        if (tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      // check bottom left of every tile not on bottom
      if (tile.y !== 0 && tile.x !== 9) {
        if (tile.value !== "x" && gameBoard[index + 9].value === "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      //check left of every tile not on left side
      if (tile.y !== 0 && gameBoard[index - 1].value === "x") {
        if (tile.value !== "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
      //check top left of every title
      if (tile.y !== 0 && tile.x !== 0) {
        if (tile.value !== "x" && gameBoard[index - 11].value === "x") {
          bombCount++;
          tile.value = bombCount;
        }
      }
    });
  };

  placeBombs();
  setNumbers();

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
