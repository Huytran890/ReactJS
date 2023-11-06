import { useCallback, useState } from "react";
import Search from "../utils/Search"

//! useCallback sẽ cache lại cả cái hàm và so sánh nó có thay đổi không (luôn dùng chung với memo) 
//! Lưu ý: useCallback sẽ đóng băng cái hàm tại lần đầu tiên được re-render nếu như không truyền dependencies và nếu truyền vào thì khi chúng ta thay đổi dependencies thì chính hàm đó sẽ đổi và => memo sẽ thay đổi và memo(component) sẽ re-render

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];
const UseCallBackOverriding = () => {
    const [users, setUsers] = useState(allUsers);
    const [show, setShow] = useState(true);
    //! Lưu ý: mỗi lần 1 component re-render thì nó sẽ tạo lại 1 function khác (tuy nó vẫn chính là function đó)
    const handleSearch = useCallback(
        (text: string) => {
            console.log(users[0]);

            const filteredUsers = allUsers.filter((user) =>
                user.includes(text),
            );
            setUsers(filteredUsers);
        },
        [users],
    );
    return (
        <div>
            <div>
                <button className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                    onClick={() => setShow(!show)}
                >
                    Show/Hide
                </button>
                <Search onChange={handleSearch} />
            </div>
            {show &&
                <ul>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
            }
        </div>


    )
}

export default UseCallBackOverriding