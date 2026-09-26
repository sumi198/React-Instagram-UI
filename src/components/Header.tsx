import { Heart, Send } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-white px-4">
      <h1 className="text-2xl font-bold tracking-tight">
        Instagram
      </h1>

      <div className="flex items-center gap-5">
        <button>
          <Heart size={24} />
        </button>

        <button>
          <Send size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;