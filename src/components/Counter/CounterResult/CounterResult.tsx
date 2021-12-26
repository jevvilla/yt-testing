import React from 'react';
import { useCounter } from '../counterContext';

export const CounterResult = () => {
  const { counter } = useCounter();

  return (
    <div>
      <span>Current count: </span>
      <span role="contentinfo" aria-label="countResult">
        {counter}
      </span>
    </div>
  );
};
