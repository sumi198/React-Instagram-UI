import {
  Home as HomeIcon,
  Search,
  PlusSquare,
  Bookmark,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function BottomNav() {
  const navItems = [
    {
      path: "/",
      icon: HomeIcon,
    },
    {
      path: "/search",
      icon: Search,
    },
    {
      path: "/post",
      icon: PlusSquare,
    },
    {
      path: "/bookmark",
      icon: Bookmark,
    },
    {
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex h-16 w-full max-w-md -translate-x-1/2 items-center justify-around border-t bg-white">
      {navItems.map(({ path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center justify-center ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <Icon
              size={25}
              strokeWidth={isActive ? 2.5 : 2}
            />
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;