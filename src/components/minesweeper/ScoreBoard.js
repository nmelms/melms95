import React, { useState, useEffect } from "react";

export default function ScoreBoard({ numOfBombs, numOfFlags }) {
  const [bombs, setBombs] = useState();
  const [flags, setFlags] = useState();
  console.log(numOfFlags);

  return (
    <div className="scoreBoard">
      <h3>Number of bombs: {numOfBombs} </h3>
      <h3>Number of flags: {numOfFlags} </h3>
    </div>
  );
}
