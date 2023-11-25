import { Post } from "@/utils/types"
import { Card } from "@/components/ui/card";

type PostCardProps = {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card>
      <h2 className="mb-4 text-2xl font-bold">{post.id}</h2>
      <p>{post.name}</p>
    </Card>
  )
}

export default PostCard