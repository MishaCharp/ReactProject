import { useState } from "react";
import { Counter } from "./BaseCounter/Counter"

export const DishCounter = () => {
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
        <Counter value={counterValue} onIncrease={increase} onDecrease={decrease} />
    );
  };