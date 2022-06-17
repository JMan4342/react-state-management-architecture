import { useRecoilState, useRecoilValue } from "recoil";
import { numberOfClicksSelector } from "./numberOfClicksSelector";
import { incrementByState } from "./incrementByState";
import { counterState } from "./counterState";

export const CounterButton = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  const [clicksData , setClicksData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
      <button
        onClick={() =>
          setClicksData([
            ...clicksData,
            { timestamp: Date.now(), amount: incrementBy },
          ])
        }
      >
        Click
      </button>
    </>
  );
};
