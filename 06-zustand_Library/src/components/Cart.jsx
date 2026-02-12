import { useState } from "react";
import Products from "./Product";
import CartList from "./CartList";
import useCartStore from "../store/CartStore";

const Cart = () => {
  const [view, setView] = useState("products");
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("products")}
          className={`px-4 py-2 rounded cursor-pointer ${
            view === "products" ? "bg-indigo-400 text-white" : "bg-gray-200"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-4 py-2 rounded cursor-pointer ${
            view === "cart" ? "bg-indigo-400 text-white" : "bg-gray-200"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>

      {view === "products" && <Products />}
      {view === "cart" && <CartList />}
    </div>
  );
};

export default Cart;
