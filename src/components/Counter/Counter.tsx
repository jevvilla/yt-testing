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
      console.log('@@@@44', error);
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
      {loading && <span>...loading</span>}
      <div>
        <button onClick={() => onSumPress()}>+</button>
        <button onClick={() => setCount((currCount) => currCount - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
