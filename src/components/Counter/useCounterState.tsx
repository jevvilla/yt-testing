import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
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

const CounterContext = createContext<Nullable<ContextType>>(null);

export const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, incrementor, setIncrementor }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterState = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
};
