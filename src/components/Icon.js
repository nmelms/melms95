import React from "react";

export default function Icon({ name, imgSrc, alt }) {
  return (
    <div className="icon">
      <img alt={alt} src={imgSrc} />
      <p>{name}</p>
    </div>
  );
}
