import {
    useEffect,
    useLayoutEffect,
    useState,
} from 'react';

//! UseLayoutEffect nó giống như useEffect nó khác là nó là thực hiện đồng bộ (synchronous) thay vì (asynchronous) như của UseEffect và (nó sẽ được thực hiện trước UseEffect).

//! lưu ý: Nó sẽ không ưu tiên render giao diện mà sẽ thực hiện action bên trong useLayoutEffect xong (không tốt cho performance nên phải cân nhắc dùng bởi vì nó sẽ làm slowdown performance)

const userIds = [1, 2];

const UseLayoutEffectOverriding = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(false);

    // This artificially slows down rendering
    let now = performance.now();
    while (performance.now() - now < 200) {
        // Do nothing for a bit...
    }
    //! problem
    // useEffect(() => {
    //     setIsAdmin(userId === userIds[0]);
    // }, [userId]);

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        const otherId = userIds.find((id) => id !== userId)!;
        setUserId(otherId);
    };

    return (
        <div className='tutorial-shorts'>
            <p>userId: {userId}</p>
            <p>Admin: {isAdmin ? 'true' : 'false'}</p>
            <button
                className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                onClick={handleChange}
            >
                Change User
            </button>
        </div>
    );
};

export default UseLayoutEffectOverriding;