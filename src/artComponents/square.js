import React, { useState } from "react";

export default function Square(props) {
  const [color, setColor] = useState(props.color);

  const handleNewColor = () => {
    setColor(props.newColor);
  };

  return (
    <div
      className="square-wrapper"
      style={{ backgroundColor: color }}
      onClick={() => handleNewColor()}
    ></div>
  );
}
