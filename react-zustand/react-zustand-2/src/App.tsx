import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";
import { useShallow } from "zustand/react/shallow";
import { shallow } from "zustand/shallow";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

const App = () => {

  console.log('«««« 🔥 vao »»»»');
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  //! Cách phiên bản mới nhất 24/12/2023
  const { incrementAsync, decrement } = useCounterStore(
    useShallow((state) => ({
      incrementAsync: state.incrementAsync,
      decrement: state.decrement
    }))
  );

  //! Cách cũ hơn case 1
  // const incrementAsync = useCounterStore((state) => state.incrementAsync);
  // const decrement = useCounterStore((state) => state.decrement);
  //! Cách cũ hơn case 2
  // const { incrementAsync, decrement } = useCounterStore((state) => ({
  //   incrementAsync: state.incrementAsync,
  //   decrement: state.decrement,
  // }), shallow);


  useEffect(() => {
    setCount();
  }, []);

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center">
      {count}
      <div className="flex gap-x-5">
        <button onClick={incrementAsync} className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative">
            IncrementAsync
          </span>
        </button>
        <button onClick={decrement} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Decrement
          </span>
        </button>

      </div>
    </div>
  );
};

export default App;