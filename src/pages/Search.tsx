import { Search as SearchIcon } from "lucide-react";

function Search() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
        <SearchIcon size={20} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-1">
        {Array.from({ length: 15 }).map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/300/300?random=${index + 10}`}
            alt="Explore"
            className="aspect-square w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Search;