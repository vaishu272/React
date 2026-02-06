import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-sm rounded-lg transition
     ${isActive ? "bg-white/10 text-white font-semibold" : "text-white/80"}
     hover:bg-white/10`;

  return (
    <nav className="sticky top-0 z-50 bg-[#163a59] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 relative">
          <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/state" className={linkClass}>
              State
            </NavLink>
            <NavLink to="/side-effects" className={linkClass}>
              Side Effects
            </NavLink>
            <NavLink to="/dom" className={linkClass}>
              DOM / ref
            </NavLink>
            <NavLink to="/performance" className={linkClass}>
              Performance
            </NavLink>
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="hidden md:block px-3 py-1 text-sm rounded-lg cursor-pointer
                         border border-white/30 text-white hover:bg-white/10"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <button
              className="md:hidden text-white text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {open && (
            <div className="absolute right-3 top-14 w-44 bg-[#0f2f4a] dark:bg-gray-800 rounded-xl py-2">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/state"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                State
              </NavLink>
              <NavLink
                to="/side-effects"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Side Effects
              </NavLink>
              <NavLink
                to="/dom"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                DOM / ref
              </NavLink>
              <NavLink
                to="/performance"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Performance
              </NavLink>

              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white/80 hover:bg-white/10 cursor-pointer"
              >
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
