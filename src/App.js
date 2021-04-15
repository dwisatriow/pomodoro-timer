import { useState, useEffect, useRef } from "react";
import useInterval from "./components/hooks/useInterval";
import Timer from "./components/Timer";
import Session from "./components/Session";
import Break from "./components/Break";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState("Session");
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1500);

  const audioRef = useRef();

  // Setting userInterval callback
  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    isRunning ? 1000 : null
  );

  // Handle session changed
  useEffect(() => {
    if (timeLeft === -1 && session === "Session") {
      setSession("Break");
      setTimeLeft(sessionLength * 60);
    }
    if (timeLeft === -1 && session === "Break") {
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
    setSession("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(1500);
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
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

  return (
    <div
      id="App"
      className="bg-white bg-opacity-30 text-primary p-10 sm:px-16 sm:py-6 md:py-9 md:px-24 lg:px-32 rounded-2xl flex flex-col items-center font-sans"
    >
      <h1
        id="app-name"
        className="text-4xl md:text-5xl  border-b-2 border-primary w-56 sm:w-60 md:w-80 text-center"
      >
        Pomodoro Timer
      </h1>
      <Timer
        session={session}
        timeLeft={timeLeft}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        isRunning={isRunning}
        audioRef={audioRef}
      />
      <div
        id="control-container"
        className="flex flex-col justify-between sm:flex-row items-center sm:mt-4 md:mt-6 sm:w-72 md:w-96"
      >
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
    </div>
  );
}

export default App;
