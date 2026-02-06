import { useState, useRef } from "react";

const UseRef = () => {
  /* ---------------- Timer ---------------- */
  const [time, setTime] = useState(0); // time in milliseconds
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10); // increment by 10ms
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  /* ---------------- DOM Manipulation ---------------- */
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  const changeBothButtons = () => {
    const color = "cyan";
    const color2 = "blue";

    if (btn1Ref.current && btn2Ref.current) {
      btn1Ref.current.style.backgroundColor = color;
      btn1Ref.current.style.color = "black";
      btn1Ref.current.innerText = `Button ${color}`;

      btn2Ref.current.style.backgroundColor = color2;
      btn2Ref.current.style.color = "black";
      btn2Ref.current.innerText = `Button ${color2}`;
    }
  };

  /* ---------------- Scroll Example ---------------- */
  const listRef = useRef(null);

  const scrollToIndex = (index) => {
    const images = listRef.current.children;
    images[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold m-4 mb-8 text-center">
        useRef multiple Examples
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= Timer ================= */}
        <div className="shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">useRef – Timer</h2>

          <p className="text-3xl font-bold mb-6">
            {(time / 1000).toFixed(2)} s
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={startTimer}
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded"
            >
              Stop
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-700 cursor-pointer text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ================= DOM Manipulation ================= */}
        <div className="shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-6">useRef – DOM Manipulation</h2>

          {/* Top buttons */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              ref={btn1Ref}
              className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer"
            >
              Button Blue
            </button>

            <button
              ref={btn2Ref}
              className="bg-rose-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Button Rose
            </button>
          </div>

          {/* Bottom controller button */}
          <button
            onClick={changeBothButtons}
            className="bg-emerald-700 text-white px-6 py-2 rounded cursor-pointer hover:bg-emerald-800 transition"
          >
            Change Both Button Colors
          </button>
        </div>

        {/* ================= Scroll ================= */}
        <div className="shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-center">
            useRef – Scroll
          </h2>

          <div className="flex justify-center gap-3 mb-4 flex-wrap">
            <button
              onClick={() => scrollToIndex(0)}
              className="cursor-pointer px-3 py-1 rounded border-2"
            >
              Neo
            </button>
            <button
              onClick={() => scrollToIndex(1)}
              className="cursor-pointer px-3 py-1 rounded border-2"
            >
              Millie
            </button>
            <button
              onClick={() => scrollToIndex(2)}
              className="cursor-pointer px-3 py-1 rounded border-2"
            >
              Bella
            </button>
          </div>

          <ul ref={listRef} className="flex gap-4 overflow-x-auto">
            <li className="min-w-55">
              <img
                src="https://placecats.com/neo/300/200"
                alt="Neo"
                className="rounded-lg"
              />
            </li>
            <li className="min-w-55">
              <img
                src="https://placecats.com/millie/300/200"
                alt="Millie"
                className="rounded-lg"
              />
            </li>
            <li className="min-w-55">
              <img
                src="https://placecats.com/bella/300/200"
                alt="Bella"
                className="rounded-lg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
