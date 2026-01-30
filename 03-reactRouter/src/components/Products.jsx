import perfume from "../assets/perfume.jpg";
import jars from "../assets/jar.jpg";
import knife from "../assets/knife.jpg";
import lamp from "../assets/lamp.jpg";
import chair from "../assets/chair.jpg";
import pen from "../assets/pen.jpg";
import bottles from "../assets/bottles.jpg";
import cable from "../assets/cable.jpg";

const Products = () => {
  const products = [
    { id: 1, name: "Perfume", price: 100, image: perfume },
    { id: 2, name: "Jars", price: 200, image: jars },
    { id: 3, name: "Knife", price: 300, image: knife },
    { id: 4, name: "Lamp", price: 400, image: lamp },
    { id: 5, name: "Chair", price: 500, image: chair },
    { id: 6, name: "Pen", price: 600, image: pen },
    { id: 7, name: "Bottles", price: 700, image: bottles },
    { id: 8, name: "Cable", price: 800, image: cable },
  ];

  return (
    <section className="bg-slate-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Latest Products
        </h2>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border shadow-md hover:shadow-xl transition p-5 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold text-slate-700">
                {item.name}
              </h3>

              <p className="text-lg text-slate-600 mt-2">
                Price: Rs.{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
