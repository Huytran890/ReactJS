import { useEffect, useRef, useState } from "react";

//! useRef là 1 hook chỉ dùng cho values không cần re-render có nghĩa là dùng tác động đến 1 dom element dễ dàng hơn chứ không làm re-render component
//! Lưu ý không sử dụng useRef trong return application có nghĩa là không dùng để trả về giao diện.

const UseRefOverriding = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log("State:", count);
        console.log("Ref:", countRef.current);
    };

    return (
        <div>
            <h2 className="text-red-400 text-xl font-semibold">
                Count: {count}
            </h2>
            <button className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                onClick={handleIncrement}
            >
                Increment
            </button>
        </div>
    );
}

const UseRefOverriding2 = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input
                className="bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none"
                ref={inputRef}
                type="text" placeholder="Type something..." />
        </div>
    );
}

export { UseRefOverriding, UseRefOverriding2 }