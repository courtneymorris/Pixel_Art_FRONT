import React, { useEffect, useState } from "react";

import Grid from "./grid";

export default function SetColor() {
  const [color, setColor] = useState("#ffffff");
  const [newColor, setNewColor] = useState("");

  useEffect(() => {
    window.onkeypress = (event) => {
      if (event.key === "Enter") {
        handleChangeColor();
      }
    };
  });

  const handleChangeColor = (event) => {
    setColor(newColor);
  };

  return (
    <div className="color-wrapper">
      <Grid
        color={color}
        newColor={newColor}
        handleChangeColor={() => handleChangeColor()}
      />
      <input
        type="color"
        value={newColor}
        name="color"
        placeholder="color..."
        onChange={(event) => setNewColor(event.target.value)}
      />
    </div>
  );
}
