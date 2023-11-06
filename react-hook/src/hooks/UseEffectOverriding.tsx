import { useEffect, useState } from "react";

//! useEffect dùng để quản lý sự thay đổi của 1 cái state, sự kiện, gọi API và tránh nó rerender ko cần thiết, và cũng dùng để clean các sự kiện)
const UseStateOverriding = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // The code that we want to run
        console.log('<<=== The count is: ===>>', count);

        // Optional return function (clean up function) hay sử dụng để clear sự kiện
        return () => {
            console.log("I am being cleaned up!");

        }
    }, [count]); // the dependency array
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