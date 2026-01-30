import shop from "../assets/shop-bg.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">
            Welcome to Our <br />
            E-commerce Store
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Discover a wide range of products at unbeatable prices. Shop now and
            enjoy exclusive deals!
          </p>

          <button
            className="mt-8 bg-blue-500 text-white cursor-pointer px-5 py-2 rounded text-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>

        {/* Right image */}
        <div>
          <img src={shop} alt="shopping" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
