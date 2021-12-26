import { CounterActions } from './CounterActions/CounterActions';
import { CounterResult } from './CounterResult/CounterResult';
import { CounterIncrementor } from './CounterIncrementor/CounterIncrementor';
import { CounterProvider } from './counterContext';

interface Props {
  description: string;
  defaultCount: number;
}

export const Counter = ({ description }: Props) => {
  return (
    <CounterProvider>
      <h3>{description}</h3>
      <CounterIncrementor />
      <CounterResult />
      <CounterActions />
    </CounterProvider>
  );
};
