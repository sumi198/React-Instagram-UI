import {
  ChevronRight,
  Lock,
  Bell,
  UserRound,
  Shield,
  LogOut,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Login status remove karo
    localStorage.removeItem("instagram_logged_in");

    // Login page par bhejo
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center border-b px-4 py-4">
        <Link
          to="/profile"
          className="mr-4 text-xl"
        >
          ←
        </Link>

        <h1 className="text-lg font-bold">
          Settings
        </h1>
      </div>

      {/* Account */}
      <div className="px-4 py-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Account
        </h2>

        <div className="divide-y">
          <SettingItem
            icon={<UserRound size={21} />}
            title="Account"
            description="Manage your account information"
          />

          <SettingItem
            icon={<Lock size={21} />}
            title="Privacy"
            description="Control who can see your content"
          />

          <SettingItem
            icon={<Shield size={21} />}
            title="Security"
            description="Password and security settings"
          />

          <SettingItem
            icon={<Bell size={21} />}
            title="Notifications"
            description="Manage your notifications"
          />
        </div>
      </div>

      {/* Logout */}
      <div className="border-t px-4 py-5">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-lg py-3 text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={21} />

          <span className="font-medium">
            Log out
          </span>
        </button>
      </div>
    </div>
  );
}

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SettingItem({
  icon,
  title,
  description,
}: SettingItemProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 py-4 text-left"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>
      </div>

      <ChevronRight
        size={20}
        className="text-gray-400"
      />
    </button>
  );
}

export default Settings;
