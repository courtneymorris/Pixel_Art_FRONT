import React from "react";

import Square from "./square";

export default function Grid(props) {
  const generateGrid = () => {
    const gridArray = [];
    for (let i = 0; i < 64; i++) {
      gridArray.push(
        <Square color={props.color} newColor={props.newColor} id={i} />
      );
    }
    return gridArray;
  };

  return (
    <div className="grid-wrapper">
      <div className="grid">{generateGrid()}</div>
    </div>
  );
}
