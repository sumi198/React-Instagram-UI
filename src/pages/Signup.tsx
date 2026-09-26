// import { FormEvent, useState } from "react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    // Basic validation
    if (!userId || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check if account already exists
    const existingUser = localStorage.getItem("instagram_user");

    if (existingUser) {
      setError("An account already exists. Please login.");
      return;
    }

    // User data
    const user = {
      userId,
      email,
      password,
    };

    // Save user in localStorage
    localStorage.setItem(
      "instagram_user",
      JSON.stringify(user)
    );

    // Login status
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
          Create an account to continue
        </p>

        {/* Error */}
        {error && (
          <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="mt-6 space-y-4"
        >
          {/* User ID */}
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          {/* Signup */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Sign up
          </button>
        </form>

        {/* Login */}
        <div className="mt-6 border-t pt-5 text-center text-sm">
          <span className="text-gray-500">
            Already have an account?
          </span>{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-500"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;