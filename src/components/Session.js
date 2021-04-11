import { Icon } from "@iconify/react";
import minusIcon from "@iconify/icons-akar-icons/minus";
import plusIcon from "@iconify/icons-akar-icons/plus";

function Session({
  sessionLength,
  handleSessionIncrement,
  handleSessionDecrement,
}) {
  return (
    <div
      id="session-container"
      className="flex flex-col items-center mt-6 sm:mt-0"
    >
      <h2 id="session-label" className="text-2xl md:text-3xl">
        Session Length
      </h2>

      <div
        id="session-length-control"
        className="flex items-center justify-between w-28 md:w-32"
      >
        <button
          id="session-decrement"
          className="border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5"
          onClick={handleSessionDecrement}
        >
          <Icon icon={minusIcon} />
        </button>
        <p id="session-length" className="text-2xl md:text-3xl">
          {sessionLength}
        </p>
        <button
          id="session-increment"
          className="border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5"
          onClick={handleSessionIncrement}
        >
          <Icon icon={plusIcon} />
        </button>
      </div>
    </div>
  );
}

export default Session;
