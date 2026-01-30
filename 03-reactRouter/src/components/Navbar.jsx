import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // subtle hover (NO blue)
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-sm rounded-lg transition
     ${isActive ? "bg-white/10 text-white font-semibold" : "text-white"}
     hover:bg-white/10`;

  return (
    <>
      {/* Top banner */}
      <div className="bg-[#04223c] text-white font-semibold text-sm py-2 text-center">
        🛒 An e-commerce Website
      </div>

      {/* Navbar */}
      <nav className="bg-[#163a59] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <div
              className="flex cursor-pointer items-center gap-3"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="logo" className="w-11 h-11 rounded" />
              <span className="text-white text-lg font-bold">
                Online Ka Adda
              </span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-8 text-white font-medium">
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/products" className={linkClass}>
                Products
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                AboutUs
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                ContactUs
              </NavLink>
            </ul>

            {/* Hamburger */}
            <button
              className="md:hidden text-white cursor-pointer text-3xl focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            {/* Mobile dropdown */}
            {open && (
              <div
                className="
                  absolute right-3 top-12
                  w-44
                  bg-[#0f2f4a]
                  rounded-xl
                  shadow-2xl
                  py-2
                  md:hidden
                  border border-white/10
                "
              >
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  Products
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  AboutUs
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  ContactUs
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
