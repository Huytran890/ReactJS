import { useMemo, useState } from "react";
import { initialItems } from "../utils/Utils";

//! useMemo dùng để cache lại dữ liệu có nghĩa là nó sẽ trả về sự thay đổi khi 1 biến cần quan sát thay đổi nếu không thay đổi nó sẽ dữ lại giá trị trước đó mà không cần phải tính toán lại.

const UseMemoOverriding = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    //! ví dụ đầu
    // const selectedItems = items.find(item => item.isSelected)

    //? giải pháp
    const selectedItems = useMemo(() => {
        return items.find(item => item.isSelected)
    }, [items]);

    //! ví dụ sau 
    // const selectedItem = useMemo(
    //     () => items.find((item) => item.id === count),
    //     [count, items],
    // );

    return (
        <div className='tutorial'>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItems?.id}</h1>
            <button className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default UseMemoOverriding