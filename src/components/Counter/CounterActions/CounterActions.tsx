import React from 'react';
import { useCounterState } from '../useCounterState';

export const CounterActions = () => {
  const { incrementor, setCounter } = useCounterState();

  return (
    <div>
      <button
        name="increment"
        aria-label="increment"
        onClick={() => setCounter((currCount) => currCount + incrementor)}
      >
        +
      </button>
      <button
        name="decrement"
        aria-label="decrement"
        onClick={() => setCounter((currCount) => currCount - incrementor)}
      >
        -
      </button>
    </div>
  );
};
