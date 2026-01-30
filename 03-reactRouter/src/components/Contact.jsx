const Contact = () => {
  return (
    <section className="bg-slate-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-800">Contact Us</h2>
          <p className="text-slate-600 mt-2">We’d love to hear from you</p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full border border-slate-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                placeholder="Last Name*"
                className="w-full border border-slate-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-slate-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type=""
                placeholder="Phone*"
                className="w-full border border-slate-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message*"
                className="w-full border border-slate-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 text-white cursor-pointer px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right map */}
          <div className="w-full h-132 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6464619814674!2d72.63772327435174!3d23.036749615800854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b54197fa4b%3A0x80c2c11f9ea88aea!2sONLINE%20KA%20ADDA!5e0!3m2!1sen!2sin!4v1767620429335"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
