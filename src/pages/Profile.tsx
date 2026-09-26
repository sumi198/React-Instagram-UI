// import { Grid3X3, Bookmark, User } from "lucide-react";

// function Profile() {
//   return (
//     <div>
//       {/* Profile Info */}
//       <div className="p-5">
//         <div className="flex items-center gap-6">
//           <img
//             src="https://i.pravatar.cc/150?img=12"
//             alt="Profile"
//             className="h-24 w-24 rounded-full"
//           />

//           <div className="flex flex-1 justify-around text-center">
//             <div>
//               <p className="font-bold">24</p>
//               <p className="text-sm text-gray-500">Posts</p>
//             </div>

//             <div>
//               <p className="font-bold">1.2K</p>
//               <p className="text-sm text-gray-500">Followers</p>
//             </div>

//             <div>
//               <p className="font-bold">350</p>
//               <p className="text-sm text-gray-500">Following</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4">
//           <h2 className="font-bold">Sumi</h2>
//           <p className="text-sm text-gray-600">
//             React Developer 🚀
//           </p>
//         </div>

//         <button className="mt-4 w-full rounded-lg border py-2 font-semibold">
//           Edit Profile
//         </button>
//       </div>

//       {/* Profile Tabs */}
//       <div className="flex justify-around border-t border-b py-3">
//         <Grid3X3 size={22} />
//         <Bookmark size={22} />
//         <User size={22} />
//       </div>

//       {/* Posts */}
//       <div className="grid grid-cols-3 gap-1">
//         {Array.from({ length: 12 }).map((_, index) => (
//           <img
//             key={index}
//             src={`https://picsum.photos/300/300?random=${index + 30}`}
//             alt="Post"
//             className="aspect-square w-full object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Profile;


import {
  Grid3X3,
  Bookmark,
  User,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="bg-white">
      {/* ================= PROFILE HEADER ================= */}
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold">
          Profile
        </h1>

        {/* Settings */}
        <Link
          to="/settings"
          className="rounded-full p-2 transition hover:bg-gray-100"
          aria-label="Settings"
        >
          <Settings
            size={24}
            strokeWidth={2}
          />
        </Link>
      </div>

      {/* ================= PROFILE INFO ================= */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />

          {/* Stats */}
          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="font-bold">
                24
              </p>

              <p className="text-sm text-gray-500">
                Posts
              </p>
            </div>

            <div>
              <p className="font-bold">
                1.2K
              </p>

              <p className="text-sm text-gray-500">
                Followers
              </p>
            </div>

            <div>
              <p className="font-bold">
                350
              </p>

              <p className="text-sm text-gray-500">
                Following
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <h2 className="font-bold">
            Sumi
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            React Developer 🚀
          </p>
        </div>

        {/* Edit Profile */}
        <button className="mt-4 w-full rounded-lg border py-2 text-sm font-semibold transition hover:bg-gray-50">
          Edit Profile
        </button>
      </div>

      {/* ================= PROFILE TABS ================= */}
      <div className="flex justify-around border-y py-3">
        <button>
          <Grid3X3 size={22} />
        </button>

        <button>
          <Bookmark size={22} />
        </button>

        <button>
          <User size={22} />
        </button>
      </div>

      {/* ================= POSTS GRID ================= */}
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/300/300?random=${index + 30}`}
            alt="Post"
            className="aspect-square w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;