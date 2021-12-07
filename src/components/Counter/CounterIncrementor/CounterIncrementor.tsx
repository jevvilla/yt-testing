import React, { FormEvent } from 'react';
import { useCounterState } from '../useCounterState';

export const CounterIncrementor = () => {
  const { setIncrementor, incrementor } = useCounterState();

  const onChangeIncrementor = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setIncrementor(Number(value));
  };

  return (
    <>
      <label htmlFor="incrementor">incrementor:</label>
      <input
        role="textbox"
        type="number"
        aria-label="incrementor"
        value={incrementor}
        onChange={onChangeIncrementor}
      />
    </>
  );
};
