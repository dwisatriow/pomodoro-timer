import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-bi/play";
import pauseIcon from "@iconify/icons-fe/pause";
import powerReset from "@iconify/icons-grommet-icons/power-reset";

function Timer({
  session,
  minutes,
  seconds,
  handleStartStop,
  handleReset,
  isRunning,
}) {
  return (
    <div id="timer-container" className="flex flex-col items-center">
      <h2 id="timer-label" className="text-5xl mt-4">
        {session}
      </h2>
      <p id="time-left" className="text-8xl">
        {minutes}:{seconds <= 9 ? 0 : null}
        {seconds}
      </p>
      <audio id="beep"></audio>

      <div id="timer-control" className="flex">
        <button
          id="start-stop"
          className="border-2 border-primary rounded-md w-10 h-10 flex items-center justify-center mx-2"
          onClick={handleStartStop}
        >
          <Icon icon={isRunning ? pauseIcon : playIcon} width={32} />
        </button>
        <button
          id="reset"
          className="border-2 border-primary rounded-md w-10 h-10 flex items-center justify-center mx-2"
          onClick={handleReset}
        >
          <Icon icon={powerReset} width={22} hFlip={true} />
        </button>
      </div>
    </div>
  );
}

export default Timer;
