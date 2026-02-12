import useCartStore from "../store/CartStore";
import productList from "./productList";

const Product = () => {
  const { cart, addToCart } = useCartStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {productList.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between border relative"
          >
            {/* Badge if already added */}
            {cartItem && (
              <span className="absolute top-4 right-4 bg-gray-300 text-xs px-2 py-1 rounded-full">
                {cartItem.quantity} in cart
              </span>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {product.description}
              </p>

              <p className="text-lg font-bold text-gray-900">
                ₹{product.price}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
