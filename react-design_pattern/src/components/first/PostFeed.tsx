import { Post } from "../../utils/types"
import PostCard from "./PostCard"

type PostFeedProps = {
    posts: Post[]
}

const PostFeed = ({ posts }: PostFeedProps) => {
    return (
        <div className="flex flex-col gap-4">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostFeed