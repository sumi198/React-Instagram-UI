interface StoryProps {
  username: string;
  image: string;
}

function Story({ username, image }: StoryProps) {
  return (
    <div className="flex w-20 shrink-0 flex-col items-center gap-1">
      <div className="rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75">
       <div className="rounded-full bg-white p-0.5">
          <img
            src={image}
            alt={username}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      </div>

      <span className="w-full truncate text-center text-xs">{username}</span>
    </div>
  );
}

export default Story;
