import { useReducer } from "react";

const initialCount = 0;
const countReducer = (state, action) => {
  //return new state

  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};

export const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
