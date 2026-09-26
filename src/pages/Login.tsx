// import { FormEvent, useState } from "react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  userId: string;
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    // Get saved user
    const savedUser = localStorage.getItem(
      "instagram_user"
    );

    if (!savedUser) {
      setError("Account not found. Please sign up first.");
      return;
    }

    const user: User = JSON.parse(savedUser);

    // Check login
    const validUser =
      (loginId === user.userId ||
        loginId === user.email) &&
      password === user.password;

    if (!validUser) {
      setError("Invalid user ID/email or password.");
      return;
    }

    // Save login state
    localStorage.setItem(
      "instagram_logged_in",
      "true"
    );

    // Go to app
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        {/* Logo */}
        <h1 className="text-center text-3xl font-bold">
          Instagram
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Login to continue
        </p>

        {/* Error */}
        {error && (
          <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >
          {/* User ID / Email */}
          <input
            type="text"
            placeholder="User ID or Email"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Log in
          </button>
        </form>

        {/* Signup */}
        <div className="mt-6 border-t pt-5 text-center text-sm">
          <span className="text-gray-500">
            Don't have an account?
          </span>{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;