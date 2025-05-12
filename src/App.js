import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 여부


useEffect(() => {
  let interval = null;

  if (isRunning) {
    interval = setInterval(() => {
      setSeconds(prev => {
        if (prev >= 20) {
          clearInterval(interval);
          setIsRunning(false);
          alert('20초가 지났습니다다!');
          return 20;
        }
        return prev + 1;
      });
    }, 1000);
  }

  return () => clearInterval(interval);
}, [isRunning]);


  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButton onStart={handleStart} onStop={handleStop} onReset={handleReset}/>
    </div>
  );
}

export default App;

