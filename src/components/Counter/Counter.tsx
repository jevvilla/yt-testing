import { FormEvent, useState } from 'react';

import { fetchFollowingCount } from '../../utilities/api/counter/apiCounter';

interface Props {
  description: string;
  defaultCount: number;
}

export const Counter = ({ description, defaultCount }: Props) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState('1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onChangeIncrementor = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setIncrementor(value);
  };

  const onSumPress = async () => {
    try {
      setLoading(true);
      const newNumber = await fetchFollowingCount(count, incrementor);
      setCount(newNumber);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>{description}</h3>
      <label htmlFor="incrementor">incrementor:</label>
      <input
        role="textbox"
        type="number"
        aria-label="incrementor"
        value={incrementor}
        onChange={onChangeIncrementor}
      />
      <br />
      <span>Current count: </span>
      <span role="contentinfo" aria-label="countResult">
        {count}
      </span>
      <div>
        <button
          name="increment"
          aria-label="increment"
          onClick={() => onSumPress()}
        >
          +
        </button>
        <button
          name="decrement"
          aria-label="decrement"
          onClick={() => setCount((currCount) => currCount - 1)}
        >
          -
        </button>
        {loading && <span>...loading</span>}
        {error && (
          <span role="contentinfo" aria-label="error">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
