import { useEffect, useState } from "react";
import { Post } from "../../utils/types";
import PostFeed from "./PostFeed";

//! Single Responsibility Principal Component

const dummyPosts = [
    {
        id: '1',
        name: 'lorem dolor sit amet'
    },
    {
        id: '2',
        name: 'lorem dolor sit amet2'
    }
]

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>(dummyPosts);

    useEffect(() => {
        //fetch data
    }, []);

    return (
        <div className="container py-4">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Home Page
            </h1>
            <div className="mx-auto w=[500px]">
                <PostFeed posts={posts} />
            </div>
        </div>
    )
}

export default HomePage