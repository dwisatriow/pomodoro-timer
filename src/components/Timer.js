import { useEffect } from "react";
import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-bi/play";
import pauseIcon from "@iconify/icons-fe/pause";
import powerReset from "@iconify/icons-grommet-icons/power-reset";
import audioSrc from "../media/alarm_beeps.mp3";

function Timer({
  session,
  timeLeft,
  handleStartStop,
  handleReset,
  isRunning,
  audioRef,
}) {
  useEffect(() => {
    if (timeLeft === 0) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [timeLeft, audioRef]);

  // Calculate minutes and seconds left
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      id="timer-container"
      className="flex flex-col items-center mt-5 sm:mt-4 md:mt-6"
    >
      <h2 id="timer-label" className="text-4xl md:text-5xl">
        {session}
      </h2>
      <p id="time-left" className="text-6xl md:text-7xl lg:text-8xl">
        {minutes <= 9 ? 0 : null}
        {minutes}:{seconds <= 9 ? 0 : null}
        {seconds}
      </p>
      <audio id="beep" ref={audioRef}>
        <source src={audioSrc} type="audio/mp3" />
      </audio>

      <div id="timer-control" className="flex">
        <button
          id="start-stop"
          className="border-2 border-primary rounded-md w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mx-1.5 lg:mx-2"
          onClick={handleStartStop}
        >
          <Icon icon={isRunning ? pauseIcon : playIcon} width={32} />
        </button>
        <button
          id="reset"
          className="border-2 border-primary rounded-md w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mx-1.5 lg:mx-2"
          onClick={handleReset}
        >
          <Icon icon={powerReset} width={22} hFlip={true} />
        </button>
      </div>
    </div>
  );
}

export default Timer;
