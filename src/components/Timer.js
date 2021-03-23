function Timer({ session, minutes, seconds, handleStartStop, handleReset }) {
  return (
    <div id="timer-container">
      <h2 id="timer-label">{session}</h2>
      <p id="time-left">
        {minutes}:{seconds <= 9 ? 0 : null}
        {seconds}
      </p>
      <audio id="beep"></audio>

      <button id="start-stop" onClick={handleStartStop}>
        Start/Stop
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
