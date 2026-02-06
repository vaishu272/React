import { useNavigate } from "react-router-dom";
import "animate.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#0a3d7a] to-[#062b55] px-4">
      <div
        className="
          max-w-lg w-full border-2 border-white/60 rounded-2xl p-10 text-center text-white
          shadow-xl bg-white/5 backdrop-blur-sm
          animate__animated animate__fadeInUp
        "
      >
        {/* 404 */}
        <h1
          className="
            text-[120px] font-bold leading-none mb-4
            animate__animated animate__zoomIn
          "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
            text-2xl font-semibold mb-4
            animate__animated animate__fadeInDown animate__delay-1s
          "
        >
          Oops! Page not found
        </h2>

        {/* Description */}
        <p
          className="
            text-sm text-white/90 mb-4
            animate__animated animate__fadeIn animate__delay-1s
          "
        >
          The page you are looking for might have been moved, deleted, or
          doesn&apos;t exist.
        </p>

        <p
          className="
            text-sm text-white/80 mb-8
            animate__animated animate__fadeIn animate__delay-2s
          "
        >
          If you think something is broken, please report the issue.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            px-6 py-2 rounded-lg bg-white text-[#0a3d7a] font-medium
            transition
            hover:bg-gray-100 hover:scale-105 active:scale-95
            animate__animated animate__bounceIn animate__delay-2s
          "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
