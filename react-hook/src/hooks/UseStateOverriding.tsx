import { useState } from "react";

//! useState dùng để thể hiện state hiện tại và set lại state hiện tại (rerender component)
const UseStateOverriding = () => {
    const [count, setCount] = useState(0);
    return (
        <div >
            <h2 className="text-red-400 text-xl font-semibold">Count: {count}</h2>
            <button className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button className="border-none px-2 py-2 rounded-md bg-green-500 text-white mx-1 my-1 hover:opacity-80
            active:scale-[.8] transition-all ease-linear duration-300"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    )
}

export default UseStateOverriding