import { NavLink, Outlet } from "react-router-dom";

const State = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-center">State Hooks</h1>

      {/* Centered tabs */}
      <div className="flex gap-4 justify-center">
        <NavLink to="useState" className={linkClass}>
          useState
        </NavLink>

        <NavLink to="useContext" className={linkClass}>
          useContext
        </NavLink>

        <NavLink to="useReducer" className={linkClass}>
          useReducer
        </NavLink>
      </div>

      {/* Centered content box */}
      <div className="w-full max-w-4xl p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default State;
