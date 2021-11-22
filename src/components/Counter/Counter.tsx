import React from 'react';

interface Props {
  description: string;
  defaultCount: number;
}

export const Counter = ({ description, defaultCount }: Props) => {
  const [count, setCount] = React.useState(defaultCount);

  return (
    <div>
      <h3>{description}</h3>
      <button onClick={() => setCount((currCount) => currCount + 1)}>+</button>
      <span>Current count: {count}</span>
      <button onClick={() => setCount((currCount) => currCount - 1)}>-</button>
    </div>
  );
};
