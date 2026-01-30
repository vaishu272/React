import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="bg-slate-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page heading */}
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          About us
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              OUR STORY
            </h3>

            <p className="text-slate-600 font-semibold leading-relaxed mb-4">
              At Online Ka Adda, we are dedicated to revolutionizing your online
              shopping experience. Founded with a passion for quality,
              convenience, and customer satisfaction, we strive to provide a
              seamless platform where you can discover, explore, and indulge in
              a wide array of products.
            </p>

            <p className="text-slate-600 font-semibold leading-relaxed mb-6">
              Our mission is simple: to connect you with the products you love,
              effortlessly. Whether you're searching for the latest tech
              gadgets, home essentials, or unique gifts, we've got you covered.
              With an extensive selection curated from top brands and emerging
              designers, we ensure that there's something for everyone.
            </p>
          </div>

          {/* Right image */}
          <div>
            <img
              src={aboutImg}
              alt="About us"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
