import { Bookmark as BookmarkIcon } from "lucide-react";

function Bookmark() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <BookmarkIcon size={50} />

      <h2 className="mt-4 text-xl font-bold">
        Saved Posts
      </h2>

      <p className="mt-2 text-gray-500">
        Posts you save will appear here.
      </p>
    </div>
  );
}

export default Bookmark;