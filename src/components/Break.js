function Break({ breakLength, handleBreakIncrement, handleBreakDecrement }) {
  return (
    <div id="break-container">
      <h2 id="break-label">Break Length</h2>
      <p id="break-length">{breakLength}</p>

      <button id="break-decrement" onClick={handleBreakDecrement}>
        -
      </button>
      <button id="break-increment" onClick={handleBreakIncrement}>
        +
      </button>
    </div>
  );
}

export default Break;
