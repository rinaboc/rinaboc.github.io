import { useState } from "react";
import otter from "./assets/walking-otter-noground.gif";
import runningOtter from "./assets/running-otter.gif";
import idleOtter from "./assets/idle-otter.gif";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getSprite = () => {
    if (count >= 69) return runningOtter;
    if (count >= 10) return otter;
    return idleOtter;
  };

  return (
    <>
      <div>
        <img src={getSprite()} className="sprite" width={102} />
      </div>
      <h1>Under Development ...</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
