import useCartStore from "../store/CartStore";

const CartList = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div>
      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-semibold mb-2">{item.name}</h4>

              <p className="text-gray-800 mb-2">Quantity: {item.quantity}</p>

              <p className="font-bold text-xl mb-2">₹{item.price}</p>
            </div>

            {/* Quantity Buttons */}
            <div className="flex items-center mt-6 space-x-4">
              <button
                onClick={() => addToCart(item)}
                className="bg-green-500 text-white px-5 py-1 rounded cursor-pointer hover:opacity-80"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-5 py-1 rounded cursor-pointer hover:opacity-80"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-10 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ₹{total}</h3>

        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:opacity-90"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
