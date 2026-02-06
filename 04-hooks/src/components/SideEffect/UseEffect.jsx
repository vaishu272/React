import { NavLink, Outlet } from "react-router-dom";

const UseEffect = () => {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-start px-3 py-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Side Effect Examples
      </h1>

      {/* Centered tabs */}
      <div className="flex gap-4 justify-center">
        <NavLink to="example1" className={linkClass}>
          Example 1
        </NavLink>

        <NavLink to="example2" className={linkClass}>
          Example 2
        </NavLink>

        <NavLink to="example3" className={linkClass}>
          Example 3
        </NavLink>
      </div>

      {/* Centered content box */}
      <div className="w-full max-w-4xl p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default UseEffect;
