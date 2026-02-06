import { useEffect, useState } from "react";

const Example2 = () => {
  const [savedDraft, setSavedDraft] = useState("");
  const [text, setText] = useState(() => {
    return localStorage.getItem("draft") || "";
  });

  const [status, setStatus] = useState(
    localStorage.getItem("draft") ? "Draft loaded" : "Not saved",
  );

  /* 🔹 Auto save effect */
  useEffect(() => {
    if (!text) return;

    const timeoutId = setTimeout(() => {
      setStatus("Saving...");
      setSavedDraft(text);
      localStorage.setItem("draft", text);
      setStatus("Saved");
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    setStatus("Typing...");
  };

  const clearDraft = () => {
    localStorage.removeItem("draft");
    setText("");
    setSavedDraft("");
    setStatus("Draft cleared");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center mt-2 px-4">
      <div className="w-full max-w-md border rounded-xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold">useEffect – Auto Save Example</h2>

        <p className="text-sm">
          Text is automatically saved after you stop typing.
        </p>

        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
          className="w-full border rounded p-3 min-h-20"
        />

        <p className="text-sm font-medium">Status: {status}</p>

        {/* Saved draft */}
        <div className="border rounded p-3 text-sm">
          <p className="font-semibold mb-1">Saved Draft:</p>
          <p>{savedDraft || "—"}</p>
        </div>

        <button
          onClick={clearDraft}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Clear Draft
        </button>
      </div>
    </div>
  );
};

export default Example2;
