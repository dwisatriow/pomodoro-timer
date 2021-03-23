import { useState, useEffect } from "react";
import useInterval from "./components/hooks/useInterval";
import "./App.scss";
import Timer from "./components/Timer";
import Session from "./components/Session";
import Break from "./components/Break";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState("Session");
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1500);

  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    isRunning ? 1000 : null
  );

  useEffect(() => {
    if (timeLeft === 0 && session === "Session") {
      setSession("Break");
      setTimeLeft(sessionLength * 60);
    }
    if (timeLeft === 0 && session === "Break") {
      setSession("Session");
      setTimeLeft(breakLength * 60);
    }
  }, [timeLeft, session, sessionLength, breakLength]);

  useEffect(() => {
    if (session === "Session") {
      setTimeLeft(sessionLength * 60);
    }
    if (session === "Break") {
      setTimeLeft(breakLength * 60);
    }
  }, [sessionLength, breakLength, session]);

  function handleStartStop() {
    setIsRunning((isRunning) => !isRunning);
  }

  function handleReset() {
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(1500);
  }

  function handleSessionIncrement() {
    if (isRunning === false && sessionLength >= 1 && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  }
  function handleSessionDecrement() {
    if (isRunning === false && sessionLength > 1 && sessionLength <= 60) {
      setSessionLength(sessionLength - 1);
    }
  }
  function handleBreakIncrement() {
    if (isRunning === false && breakLength >= 1 && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  function handleBreakDecrement() {
    if (isRunning === false && breakLength > 1 && breakLength <= 60) {
      setBreakLength(breakLength - 1);
    }
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <div className="App">
      <Timer
        session={session}
        minutes={minutes}
        seconds={seconds}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
      />
      <Session
        sessionLength={sessionLength}
        handleSessionIncrement={handleSessionIncrement}
        handleSessionDecrement={handleSessionDecrement}
      />
      <Break
        breakLength={sessionLength}
        handleBreakIncrement={handleBreakIncrement}
        handleBreakDecrement={handleBreakDecrement}
      />
    </div>
  );
}

export default App;
