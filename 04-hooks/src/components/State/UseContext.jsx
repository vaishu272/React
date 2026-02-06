import React, { createContext, useContext, useState } from "react";

/* 1️⃣ Create Context */
const AppContext = createContext();

/* 2️⃣ Provider Component */
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user] = useState("Vaishnavi");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, user, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

/* 3️⃣ Child Component using Context */
const UserProfile = () => {
  const { user, theme } = useContext(AppContext);

  return (
    <div
      className={`p-4 border rounded-lg transition ${
        theme === "dark"
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-gray-100 text-gray-900 border-gray-300"
      }`}
    >
      <p>
        <b>User:</b> {user}
      </p>
      <p>
        <b>Theme:</b> {theme}
      </p>
    </div>
  );
};

/* 4️⃣ Another Child Component updating Context */
const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 cursor-pointer rounded transition ${
        theme === "dark" ? "bg-indigo-600 text-white" : "bg-blue-500 text-white"
      }`}
    >
      Toggle Theme
    </button>
  );
};

/* 5️⃣ Main Component */
const UseContext = () => {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
};

/* Page consuming context */
const Page = () => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`min-h-[60vh] flex items-center justify-center transition ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 w-full max-w-md text-center transition">
        <h1 className="text-3xl font-bold mb-6 text-[#ebf0f4]">
          useContext – Global State Demo
        </h1>

        <UserProfile />

        <div className="mt-6">
          <ThemeToggle />
        </div>

        <p className="text-sm text-gray-500 mt-6">
          👉 State is shared globally without props
        </p>
      </div>
    </div>
  );
};

export default UseContext;
