import React, { FormEvent } from 'react';
import { useCounter } from '../counterContext';

export const CounterIncrementor = () => {
  const { setIncrementor, incrementor } = useCounter();

  const onChangeIncrementor = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setIncrementor(Number(value));
  };

  return (
    <>
      <label htmlFor="incrementor">incrementor:</label>
      <input
        role="textbox"
        aria-label="incrementor"
        value={incrementor}
        onChange={onChangeIncrementor}
      />
    </>
  );
};
