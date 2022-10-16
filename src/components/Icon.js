import React from "react";

export default function Icon({ name, imgSrc, alt, handleClick, key }) {
  return (
    <div id={key} onClick={handleClick} className="icon">
      <img alt={alt} src={imgSrc} />
      <p>{name}</p>
    </div>
  );
}
