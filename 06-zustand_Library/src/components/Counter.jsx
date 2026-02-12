import useCounterStore from "../store/CounterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="mt-25 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-2xl text-center w-96">
        <h1 className="text-3xl font-bold mb-8 tracking-wide">
          Zustand Counter
        </h1>

        <h2 className="text-6xl font-extrabold mb-10 drop-shadow-lg">
          {count}
        </h2>

        <div className="flex justify-between gap-4">
          <button
            onClick={increment}
            className="flex-1 cursor-pointer bg-green-500 hover:bg-green-600 active:scale-95 py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 active:scale-95 text-white py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            -
          </button>

          <button
            onClick={reset}
            className="flex-1 cursor-pointer bg-gray-700 hover:bg-gray-800 active:scale-95 text-white py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
