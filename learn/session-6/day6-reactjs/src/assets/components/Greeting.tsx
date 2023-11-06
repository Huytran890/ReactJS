import { useEffect, useState } from "react";
import axios from 'axios';
const Greeting = () => {
    const [title, setTitle] = useState('');
    interface post {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    const [posts, setPosts] = useState<post[]>([]);

    //Dùng useEffect
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // handle success
                console.log(response.data);
                //lấy data gán cho State
                setPosts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>

    )
}

export default Greeting