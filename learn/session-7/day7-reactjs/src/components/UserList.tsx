import axios from "axios";
import { useEffect, useState } from 'react';
const UserList = () => {
    interface userType {
        id: number;
        username: string;
        phone: string;
        email: string;
        address: object;
        company: object;
        website: string;
    }
    const [users, setUsers] = useState<userType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        console.log('begin call API');

        let isFetched = false;

        const fetchData = async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.data);
                console.log(data);

                if (isFetched) {
                    setUsers(data);
                    setLoading(false);
                }
            }

            catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        if (!isFetched) {
            setLoading(true)
            setTimeout(() => {
                fetchData();
            }, 2000)
            //Gọi xong thì đổi cờ là đã gọi
            isFetched = true;
        }

        return () => {
            isFetched = true;
        }
    }, [])
    return (
        <div>
            <h3>User List</h3>
            {loading ? <div>Loading...</div> : <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>}


        </div>
    )
}

export default UserList