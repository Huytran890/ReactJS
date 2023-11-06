import { useEffect, useState } from 'react'
import { useDebounce } from './customHooks/useDebounce';
import Search from '../utils/Search';
import { User, fetchUsers } from '../utils/Utils';

const Debounce = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);

            const users = await fetchUsers(debouncedSearch);
            setUsers(users);

            setLoading(false);
        };
        loadUsers();
    }, [debouncedSearch]);

    return (
        <div className='tutorial'>
            <Search onChange={setSearch} />
            {loading && <div>Loading...</div>}
            {!loading &&
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>;
                })}
        </div>
    );
}

export default Debounce