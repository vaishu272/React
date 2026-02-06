import { useState, useMemo } from "react";

/* 🔴 Expensive function */
function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 1_000_000_000; i++) {
    return num * 2;
  }
}

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  /* 🔹 Memoized calculation */
  const result = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-xl shadow-lg p-8 space-y-6 text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold">
          useMemo – Performance Optimization
        </h2>

        {/* Counter */}
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            Count: <span className="font-bold">{count}</span>
          </p>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Increase Count
          </button>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="block font-medium">Enter Number</label>

          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Result */}
        <div className="border-t pt-4">
          <p className="text-lg">
            Result:
            <span className="ml-2 font-bold text-xl">{result}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
