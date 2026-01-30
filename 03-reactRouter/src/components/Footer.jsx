import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#163a59] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Online Ka Adda</h2>
            <p className="text-slate-200 leading-relaxed">
              Your one-stop destination for quality products at affordable
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-200">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-200">
              <li className="hover:text-blue-400 cursor-pointer transition">
                FAQ
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/p/Online-KA-ADDA-100077298200461/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#163a59] hover:bg-blue-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/onlinekaadda?igsh=ZnEwa2U1ZHJmd2s="
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#163a59] hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/c/917698685685"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#163a59] hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:amazingmultytrade@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#163a59] hover:bg-red-500 hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sub Footer */}
      <div className="bg-[#04223c] text-white font-semibold text-sm py-2 text-center">
        Online Ka Adda | All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
