// import { useState } from "react";

// import {
//   Heart,
//   MessageCircle,
//   Send,
//   Bookmark,
// } from "lucide-react";

// interface PostCardProps {
//   username: string;
//   image: string;
//   caption: string;
// }

// function PostCard({
//   username,
//   image,
//   caption,
// }: PostCardProps) {
//   const [liked, setLiked] = useState(false);

//   return (
//     <article className="mb-8 border-b border-gray-200 pb-5">
//       {/* Post Header */}

//       <div className="flex items-center gap-3 py-3">
//         <img
//           src={`https://i.pravatar.cc/50?u=${username}`}
//           alt={username}
//           className="h-9 w-9 rounded-full object-cover"
//         />

//         <strong className="text-sm">
//           {username}
//         </strong>
//       </div>

//       {/* Post Image */}

//       <img
//         src={image}
//         alt="Post"
//         className="aspect-square w-full object-cover"
//       />

//       {/* Actions */}

//       <div className="flex items-center justify-between py-3">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setLiked(!liked)}
//             className="transition hover:scale-110"
//           >
//             <Heart
//               size={25}
//               fill={liked ? "red" : "none"}
//               color={liked ? "red" : "currentColor"}
//             />
//           </button>

//           <button className="transition hover:scale-110">
//             <MessageCircle size={25} />
//           </button>

//           <button className="transition hover:scale-110">
//             <Send size={25} />
//           </button>
//         </div>

//         <button className="transition hover:scale-110">
//           <Bookmark size={25} />
//         </button>
//       </div>

//       {/* Caption */}

//       <div className="text-sm">
//         <strong>{username}</strong>{" "}
//         <span>{caption}</span>
//       </div>
//     </article>
//   );
// }

// export default PostCard;














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
  comments?: number;
  time?: string;
  date?: string;
}

function PostCard({
  username,
  avatar,
  image,
  caption,
  likes,
  comments = 0,
  time = "3h",
  date = "September 26, 2026",
}: PostCardProps) {
  return (
    <article className="border-b border-gray-200 bg-white">
      {/* ================= USER HEADER ================= */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <div className="rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75">
            <div className="rounded-full bg-white p-0.5">
              <img
                src={avatar}
                alt={username}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Username + Time */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                {username}
              </span>

              <span className="text-[10px] text-blue-500">
                ●
              </span>
            </div>

            <span className="text-xs text-gray-500">
              {time}
            </span>
          </div>
        </div>

        {/* More Button */}
        <button
          type="button"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <MoreHorizontal size={22} />
        </button>
      </div>

      {/* ================= POST IMAGE ================= */}
      <div className="w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={`${username}'s post`}
          className="aspect-square w-full object-cover"
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex items-center justify-between px-4 pt-3">
        {/* Left Actions */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="transition hover:scale-110"
          >
            <Heart
              size={25}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            className="transition hover:scale-110"
          >
            <MessageCircle
              size={25}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            className="transition hover:scale-110"
          >
            <Send
              size={24}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Bookmark */}
        <button
          type="button"
          className="transition hover:scale-110"
        >
          <Bookmark
            size={25}
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* ================= LIKES ================= */}
      <div className="px-4 pt-3">
        <p className="text-sm font-semibold text-gray-900">
          {likes.toLocaleString()} likes
        </p>
      </div>

      {/* ================= CAPTION ================= */}
      <div className="px-4 pt-1">
        <p className="text-sm leading-5 text-gray-900">
          <span className="mr-1 font-semibold">
            {username}
          </span>

          {caption}
        </p>
      </div>

      {/* ================= COMMENTS ================= */}
      {comments > 0 && (
        <button
          type="button"
          className="px-4 pt-2 text-sm text-gray-500"
        >
          View all {comments} comments
        </button>
      )}

      {/* ================= DATE ================= */}
      <div className="px-4 pb-4 pt-2">
        <p className="text-[10px] uppercase tracking-wide text-gray-400">
          {date}
        </p>
      </div>
    </article>
  );
}

export default PostCard;






