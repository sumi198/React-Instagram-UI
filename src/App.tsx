import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* ================= PROTECTED APP ================= */}

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route
              path="/search"
              element={<Search />}
            />

            <Route
              path="/post"
              element={<Post />}
            />

            <Route
              path="/bookmark"
              element={<Bookmark />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;