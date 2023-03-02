import React from "react";

export default function Bomb({ id, handleClick }) {
  return (
    <div onClick={(e) => handleClick(e)} id={id} className="bomb">
      Bomb
    </div>
  );
}
