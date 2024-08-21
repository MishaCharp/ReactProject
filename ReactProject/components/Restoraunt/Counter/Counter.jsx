import { useState } from "react";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increase = () => {
    if (counterValue >= 5) return;

    setCounterValue((count) => count + 1);
  };

  const decrease = () => {
    if (counterValue <= 0) return;

    setCounterValue((count) => count - 1);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <input type="text" readOnly value={counterValue}></input>
      <button onClick={decrease}>-</button>
    </div>
  );
};
