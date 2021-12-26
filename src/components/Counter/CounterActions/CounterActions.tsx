import React from 'react';
import { useCounter } from '../counterContext';

export const CounterActions = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button name="increment" aria-label="increment" onClick={increment}>
        +
      </button>
      <button name="decrement" aria-label="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
};
