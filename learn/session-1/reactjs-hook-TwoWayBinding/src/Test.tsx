import { memo } from "react";

// ! memo
// const Test = ({ count }: { count: number }) => {
//   console.log("<<=== re-render ===>>");
//   return <h1>Hello ae {count}</h1>;
// };

// ! useCallback hook
const Test = ({ onIncrease }: { onIncrease: () => number }) => {
  console.log("re-render");
  return (
    <>
      <h2>Hello ae</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
};

export default memo(Test);
