import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import State from "./components/State/State";
import UseState from "./components/State/UseState";
import UseReducer from "./components/State/UseReducer";
import UseContext from "./components/State/UseContext";

import UseEffect from "./components/SideEffect/UseEffect";
import Example1 from "./components/SideEffect/Example1";
import Example2 from "./components/SideEffect/Example2";
import Example3 from "./components/SideEffect/Example3";

import UseRef from "./components/Dom_ref/UseRef";

import Performance from "./components/Performance/Performance";
import UseCallback from "./components/Performance/UseCallback";
import UseMemo from "./components/Performance/UseMemo";
import NotFound from "./components/NotFound";

const Layout = () => {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "state",
        element: <State />,
        children: [
          { index: true, element: <UseState /> },
          { path: "useState", element: <UseState /> },
          { path: "useReducer", element: <UseReducer /> },
          { path: "useContext", element: <UseContext /> },
        ],
      },

      {
        path: "side-effects",
        element: <UseEffect />,
        children: [
          { index: true, element: <Example1 /> },
          { path: "example1", element: <Example1 /> },
          { path: "example2", element: <Example2 /> },
          { path: "example3", element: <Example3 /> },
        ],
      },

      { path: "dom", element: <UseRef /> },

      {
        path: "performance",
        element: <Performance />,
        children: [
          { index: true, element: <UseMemo /> },
          { path: "useMemo", element: <UseMemo /> },
          { path: "useCallback", element: <UseCallback /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
