import { Ref, forwardRef, useImperativeHandle, useState } from "react";

export type CounterRef = {
  reset: () => void;
}

interface CounterProps { }

const Counter = (props: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // We want to expose this to the parent
  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <h1 className='text-2xl'>Count: {count}</h1>
      <button
        className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
        onClick={decrement}>Decrement</button>
      <button
        className="border-none px-2 py-2 rounded-md bg-green-500 text-white mx-1 my-1 hover:opacity-80
      active:scale-[.8] transition-all ease-linear duration-300"
        onClick={increment}>Increment</button>
    </div>
  );
}

export default forwardRef(Counter);