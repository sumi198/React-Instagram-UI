import {
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";

function Reel() {
  return (
    <div
      className="
        flex
        min-h-[calc(100vh-80px)]
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          relative
          h-[700px]
          w-full
          max-w-[400px]
          overflow-hidden
          rounded-xl
          bg-black
          text-white
        "
      >
        <video
          src=""
          controls
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Reel Info */}

        <div
          className="
            absolute
            bottom-7
            left-5
          "
        >
          <h3 className="font-bold">
            @john
          </h3>

          <p className="mt-1">
            Beautiful reel 🔥
          </p>
        </div>

        {/* Reel Actions */}

        <div
          className="
            absolute
            right-4
            bottom-7
            flex
            flex-col
            gap-5
          "
        >
          <button className="transition hover:scale-110">
            <Heart size={28} />
          </button>

          <button className="transition hover:scale-110">
            <MessageCircle size={28} />
          </button>

          <button className="transition hover:scale-110">
            <Send size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reel;