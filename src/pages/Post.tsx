import { Plus } from "lucide-react";

function Post() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 rounded-full bg-black p-5 text-white">
        <Plus size={35} />
      </div>

      <h2 className="text-xl font-bold">
        Create New Post
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Share photos and moments with your followers.
      </p>

      <button className="mt-5 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white">
        Select Photo
      </button>
    </div>
  );
}

export default Post;