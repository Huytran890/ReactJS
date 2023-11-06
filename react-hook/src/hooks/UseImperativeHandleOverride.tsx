
//! useImperativeHandle được dùng để đưa 1 state hay 1 function của con ra ngoài cha xử lý

import { useRef } from "react"
import Counter, { CounterRef } from "../utils/Counter"
import TextInput, { TextInputRef } from "../utils/TextInput";

const UseImperativeHandleOverride = () => {
  // const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<TextInputRef>(null);

  return (
    <div>
      {/* ví dụ 1 */}
      {/* <div>
        <Counter ref={counterRef} />
      </div>
      <button className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
        onClick={() => counterRef.current?.reset()}
      >
        Reset From Parent
      </button> */}

      {/* ví dụ 2 */}
      <div>
        <div className='mb-2'>
          <TextInput ref={inputRef} />
        </div>
        <button
          className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
          onClick={() => inputRef.current?.reset()}>
          Reset From Parent
        </button>
      </div>
    </div>
  )
}

export default UseImperativeHandleOverride