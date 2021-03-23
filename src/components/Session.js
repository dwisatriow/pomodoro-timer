function Session({
  sessionLength,
  handleSessionIncrement,
  handleSessionDecrement,
}) {
  return (
    <div id="session-container">
      <h2 id="session-label">Session Length</h2>
      <p id="session-length">{sessionLength}</p>

      <button id="session-decrement" onClick={handleSessionDecrement}>
        -
      </button>
      <button id="session-increment" onClick={handleSessionIncrement}>
        +
      </button>
    </div>
  );
}

export default Session;
