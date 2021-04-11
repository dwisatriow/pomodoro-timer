import { Icon } from "@iconify/react";
import minusIcon from "@iconify/icons-akar-icons/minus";
import plusIcon from "@iconify/icons-akar-icons/plus";

function Break({ breakLength, handleBreakIncrement, handleBreakDecrement }) {
  return (
    <div
      id="break-container"
      className="flex flex-col items-center mt-4 sm:mt-0"
    >
      <h2 id="break-label" className="text-2xl md:text-3xl">
        Break Length
      </h2>

      <div
        id="break-length-control"
        className="flex items-center justify-between w-28 md:w-32"
      >
        <button
          id="break-decrement"
          className="border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5"
          onClick={handleBreakDecrement}
        >
          <Icon icon={minusIcon} />
        </button>
        <p id="break-length" className="text-2xl md:text-3xl">
          {breakLength}
        </p>
        <button
          id="break-increment"
          className="border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5"
          onClick={handleBreakIncrement}
        >
          <Icon icon={plusIcon} />
        </button>
      </div>
    </div>
  );
}

export default Break;
