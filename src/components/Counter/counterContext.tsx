import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useMemo,
} from 'react';

interface Props {
  children: ReactNode;
}
interface ContextType {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  incrementor: number;
  setIncrementor: Dispatch<SetStateAction<number>>;
}

type Nullable<T> = null | T;
type ActionType = {
  type: 'INCREMENT' | 'DECREMENT';
};

type State = {
  counter: number;
  incrementor: number;
};

const CounterContext = createContext<Nullable<ContextType>>(null);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(`useCounterState must be used within a CountProvider`);
  }

  const { counter, setCounter, incrementor, setIncrementor } = context;

  const increment = () =>
    setCounter((currentValue) => currentValue + incrementor);

  const decrement = () =>
    setCounter((currentValue) => currentValue - incrementor);

  return {
    counter,
    increment,
    decrement,
    incrementor,
    setIncrementor,
  };
};

export const CounterProvider = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  const value = useMemo(() => {
    return { counter, setCounter, incrementor, setIncrementor };
  }, [counter, incrementor]);

  return <CounterContext.Provider value={value} {...props} />;
};
