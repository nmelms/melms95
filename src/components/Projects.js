import React from "react";

export default function Projects({ selected, handleClick }) {
  return (
    <div
      onClick={() => handleClick("Projects")}
      className={selected === "Projects" ? "projects top" : "projects"}
    >
      Projects
    </div>
  );
}
