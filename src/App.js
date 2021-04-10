import { useState, useEffect } from "react";
import useInterval from "./components/hooks/useInterval";
import "./App.css";
import Timer from "./components/Timer";
import Session from "./components/Session";
import Break from "./components/Break";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState("Session");
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1500);

  // Setting userInterval callback
  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    isRunning ? 1000 : null
  );

  // Handle session changed
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

  // Handle timer length changed
  useEffect(() => {
    if (session === "Session") {
      setTimeLeft(sessionLength * 60);
    }
    if (session === "Break") {
      setTimeLeft(breakLength * 60);
    }
  }, [sessionLength, breakLength, session]);

  // Handle start/stop
  function handleStartStop() {
    setIsRunning((isRunning) => !isRunning);
  }

  // Handle reset
  function handleReset() {
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(1500);
  }

  // Handle session increment
  function handleSessionIncrement() {
    if (isRunning === false && sessionLength >= 1 && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  }
  // Handle session decrement
  function handleSessionDecrement() {
    if (isRunning === false && sessionLength > 1 && sessionLength <= 60) {
      setSessionLength(sessionLength - 1);
    }
  }

  // Handle break increment
  function handleBreakIncrement() {
    if (isRunning === false && breakLength >= 1 && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  // Handle break decrement
  function handleBreakDecrement() {
    if (isRunning === false && breakLength > 1 && breakLength <= 60) {
      setBreakLength(breakLength - 1);
    }
  }

  // Calculate minutes and seconds left
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      id="App"
      className="bg-white bg-opacity-30 text-primary p-8 rounded-2xl flex flex-col items-center font-sans"
    >
      <h1 id="app-name" className="text-5xl border-b-2 border-primary">
        Pomodoro Timer
      </h1>
      <Timer
        session={session}
        minutes={minutes}
        seconds={seconds}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        isRunning={isRunning}
      />
      <Session
        sessionLength={sessionLength}
        handleSessionIncrement={handleSessionIncrement}
        handleSessionDecrement={handleSessionDecrement}
      />
      <Break
        breakLength={breakLength}
        handleBreakIncrement={handleBreakIncrement}
        handleBreakDecrement={handleBreakDecrement}
      />
    </div>
  );
}

export default App;
