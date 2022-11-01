import React, { useRef } from "react";
import Tile from "./Tile";
import Bomb from "./Bomb";
import { getByTitle } from "@testing-library/dom";

export default function MineSweeper() {
  const tileRef = useRef([]);
  const row = 10;
  const col = 10;

  const numOfBombs = 10;
  const gameBoard = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      gameBoard.push({ value: "", x: i, y: j, hidden: true });
    }
  }

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

  const handleTileClick = (tile, i) => {
    console.log(tile.x, tile.y);
    tileRef.current[i].classList.add("visible");
    tile.hidden = false;
    tile.value === "x" && console.log("gameOver");
    tile.value === "" && check(tile, i);
    tile.value !== "" && tile.value !== "x" && console.log("hello");
  };

  const check = (tile, i) => {
    // //check top
    if (tile.x !== 0 && gameBoard[i - 10].hidden === true) {
      console.log("check");
      tileRef.current[i - 10].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i - 10], i - 10);
    }
    //check top right
    if (tile.y !== 9 && tile.x !== 0 && gameBoard[i - 9].hidden === true) {
      console.log(gameBoard[i - 9]);
      tileRef.current[i - 9].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i - 9], i - 9);
    }
    // check right
    if (tile.y !== 9 && gameBoard[i + 1].hidden === true) {
      console.log(gameBoard[i + 1]);
      tileRef.current[i + 1].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i + 1], i + 1);
    }
    //check bottom right
    if (tile.x !== 9 && tile.y !== 9 && gameBoard[i + 11].hidden === true) {
      tileRef.current[i + 11].classList.add("visible");
      console.log(tile.x, tile.y);
      tile.hidden = false;
      handleTileClick(gameBoard[i + 11], i + 11);
    }
    //check bottom
    if (tile.x !== 9 && gameBoard[i + 10].hidden === true) {
      tileRef.current[i + 10].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i + 10], i + 10);
    }
    //check bottom left
    if (tile.x !== 9 && tile.y !== 0 && gameBoard[i + 9].hidden === true) {
      tileRef.current[i + 9].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i + 9], i + 9);
    }
    //check left
    if (tile.y !== 0 && gameBoard[i - 1].hidden === true) {
      tileRef.current[i - 1].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i - 1], i - 1);
    }
    //check top left
    if (tile.y !== 0 && tile.x !== 0 && gameBoard[i - 11].hidden === true) {
      tileRef.current[i - 11].classList.add("visible");
      tile.hidden = false;
      handleTileClick(gameBoard[i - 11], i - 11);
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
      {gameBoard.map((tile, i) => {
        return (
          <div
            ref={(ref) => (tileRef.current[i] = ref)}
            onClick={() => handleTileClick(tile, i)}
            className="tile"
            style={{ color: tile.hidden ? "black" : "white" }}
          >
            {tile.value}
          </div>
        );
      })}
    </div>
  );
}
