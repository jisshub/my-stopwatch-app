import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  function toggle() {
    setRunning(!running);
  }

  function reset() {
    setTime(0);
    setRunning(false);
  }

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>Time: {new Date(time * 1000).toISOString().substr(14, 8)}</div>
      <button onClick={toggle}>{running ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
