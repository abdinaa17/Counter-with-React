import React from "react";
import "./styles.css";
const { useState } = React;

export default function App() {
  const [num, setNum] = useState(0);

  const handleClickUp = () => {
    setNum(num + 1);
  };
  const handleClickDown = () => {
    setNum(num - 1);
  };
  return (
    <div className="App">
      <h1>{num}</h1>
      <button
        onClick={handleClickUp}
        style={{ cursor: "pointer", padding: "5px", borderRadius: "5px" }}
      >
        {" "}
        Count Up
      </button>
      <button
        onClick={handleClickDown}
        style={{ cursor: "pointer", padding: "5px", borderRadius: "5px" }}
      >
        {" "}
        Count Down
      </button>
    </div>
  );
}
