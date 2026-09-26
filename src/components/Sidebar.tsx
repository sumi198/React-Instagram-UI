import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface PostCardProps {
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
}

function PostCard({
  username,
  avatar,
  image,
  caption,
  likes,
}: PostCardProps) {
  return (
    <article className="border-b bg-white">
      {/* User Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={username}
            className="h-9 w-9 rounded-full object-cover"
          />

          <span className="font-semibold">{username}</span>
        </div>

        <MoreHorizontal size={22} />
      </div>

      {/* Post Image */}
      <img
        src={image}
        alt="Post"
        className="aspect-square w-full object-cover"
      />

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-4">
          <Heart size={25} />
          <MessageCircle size={25} />
          <Send size={25} />
        </div>

        <Bookmark size={25} />
      </div>

      {/* Likes */}
      <div className="px-4">
        <p className="font-semibold">{likes} likes</p>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4 pt-1">
        <p>
          <span className="font-semibold">{username}</span>{" "}
          {caption}
        </p>
      </div>
    </article>
  );
}

export default PostCard;