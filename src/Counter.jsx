import React from "react";
import { useState } from "react";

const Counter = () => {
  // declare const [variable => i want to use useState with it , nameOfFunction => That Dealing With Variable] = useState(initial);
  const [count, setCount] = useState(0);

  const handleCount = () => {
      setCount((count) => count + 1);
      console.log(count);
  };
  return (
    <div>
          <h2> {count}</h2>
      <button onClick={handleCount} disabled={count >5 ? true : false}>+</button>
    </div>
  );
};

export default Counter;