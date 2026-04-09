import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Simple Rendere, count: ", count);
  const handleClick = () => {
    setCount((prev) => {
      console.log("prev count+1: ", prev);
      return prev + 1;
    });

    setCount((prev) => {
      console.log("prev count+5: ", prev);
      return prev + 5;
    });

    setCount((prev) => {
      console.log("prev count+10: ", prev);
      return prev + 10;
    });
    console.log("Count+10: ", count);
  };
  return (
    <div>
      <h2>Count2: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
