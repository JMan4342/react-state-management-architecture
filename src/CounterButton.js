import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const CounterButton = () => {
  const { numberOfClicks, increment, incrementBy, setIncrementBy } = useContext(CounterContext);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => increment()}>
        Click
      </button>
    </>
  );
};
