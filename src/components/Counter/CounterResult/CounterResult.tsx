import React from 'react';
import { useCounterState } from '../useCounterState';

export const CounterResult = () => {
  const { counter } = useCounterState();

  return (
    <div>
      <span>Current count: </span>
      <span role="contentinfo" aria-label="countResult">
        {counter}
      </span>
    </div>
  );
};
