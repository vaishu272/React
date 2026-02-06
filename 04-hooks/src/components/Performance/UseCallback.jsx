import { useState, useCallback, memo } from "react";

/* 🔹 Child component (memoized) */
const SubmitButton = memo(({ onSubmit }) => {
  console.log("🟢 SubmitButton rendered");

  return (
    <button
      onClick={onSubmit}
      className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
    >
      Submit
    </button>
  );
});

const UseCallback = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  /* 🔹 Memoized callback */
  const handleSubmit = useCallback(() => {
    alert(`Submitted: ${name}`);
  }, [name]);

  console.log("🔵 Parent rendered");

  return (
    <div className="p-6 max-w-md mx-auto mt-10 text-center border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6">useCallback + React.memo</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 w-full mb-6 rounded"
        placeholder="Enter name"
      />

      <div className="flex justify-center gap-4">
        {/* ✅ Button color kept */}
        <SubmitButton onSubmit={handleSubmit} />

        {/* ✅ Button color kept */}
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer"
        >
          Re-render ({count})
        </button>
      </div>
    </div>
  );
};

export default UseCallback;
