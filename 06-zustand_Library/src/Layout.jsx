import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          {/* Navigation Links */}
          <div className="flex gap-6 text-gray-700 text-lg">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-500"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/counter"
              end
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-500"
                }`
              }
            >
              Counter
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-500"
                }`
              }
            >
              Cart
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
