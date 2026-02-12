import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./components/Counter";
import Cart from "./components/Cart";
import Layout from "./Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
