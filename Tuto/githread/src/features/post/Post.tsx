import { buttonVariants } from "@/components/ui/button";
import { PostHome } from "@/src/query/post.query";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { LikeButton } from "./LikeButton";
import { PostLayout } from "./PostLayout";

type PostProps = {
  post: PostHome;
};

export const Post = ({ post }: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content.split("\n").map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </Link>
      <div className="flex items-center gap-2">
        <LikeButton postId={post.id} isLiked={post.likes.length > 0} />
        <Link
          href={`/posts/${post.id}/reply`}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <MessageCircle size={20} />
        </Link>
      </div>
      <div>
        <Link
          className="text-sm text-muted-foreground"
          href={`/posts/${post.id}`}
        >
          {post._count.likes} likes
        </Link>
        {" ~ "}
        <Link
          className="text-sm text-muted-foreground"
          href={`/posts/${post.id}`}
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
