import { useEffect, useRef, useState, memo } from "react";

const Example1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("users");

  // 🔹 Cache for API responses
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      // ✅ Use cached data if available
      if (cacheRef.current[type]) {
        setData(cacheRef.current[type]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const result = await res.json();

        cacheRef.current[type] = result; // cache response
        setData(result);
      } catch (err) {
        console.error("API error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        useEffect – Multiple API Example
      </h1>

      {/* Selector */}
      <div className="flex gap-4 mb-6">
        {["users", "posts", "comments"].map((item) => (
          <button
            key={item}
            onClick={() => setType(item)}
            className={`px-4 py-2 rounded cursor-pointer ${
              type === item ? "bg-blue-600 text-white" : "border"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {loading && <p className="text-sm">Loading {type}...</p>}

      {!loading && (
        <ul className="grid md:grid-cols-2 gap-4">
          {data.slice(0, 10).map((item) => (
            <li key={item.id} className="p-4 border rounded shadow">
              {type === "users" && (
                <>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm">{item.email}</p>
                </>
              )}

              {type === "posts" && (
                <>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.body}</p>
                </>
              )}

              {type === "comments" && (
                <>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm">{item.email}</p>
                  <p className="text-sm">{item.body}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Example1);
