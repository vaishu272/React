const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-purple-100 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Understanding Zustand State Management
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          This project demonstrates how global state management works using
          <span className="font-semibold text-indigo-600"> Zustand</span>. It
          also compares Zustand with useState, Context API, and Redux to help
          understand when to use each approach.
        </p>
      </div>

      {/* What is Zustand */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-12">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          What is Zustand?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Zustand is a lightweight global state management library for React. It
          allows components to share state without prop drilling and without
          wrapping the entire app inside a Provider.
        </p>

        <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
          <li>No boilerplate</li>
          <li>No reducers required</li>
          <li>No Provider needed</li>
          <li>Optimized re-renders using selectors</li>
          <li>Supports middleware like persist and devtools</li>
        </ul>
      </div>

      {/* Comparison Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* useState */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-600 mb-3">useState</h3>
          <p className="text-gray-600 text-sm">
            Built-in React hook for managing local component state.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Simple</li>
            <li>✔ No extra library</li>
            <li>❌ Not global</li>
            <li>❌ Causes prop drilling</li>
          </ul>
        </div>

        {/* Context */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Context API</h3>
          <p className="text-gray-600 text-sm">
            Shares global state across components without props.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Built-in</li>
            <li>✔ Global access</li>
            <li>❌ Re-renders all consumers</li>
            <li>❌ Boilerplate with Providers</li>
          </ul>
        </div>

        {/* Zustand */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-2 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-600 mb-3">Zustand</h3>
          <p className="text-gray-600 text-sm">
            Lightweight global state management with minimal setup.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Very simple API</li>
            <li>✔ No Provider</li>
            <li>✔ Optimized re-renders</li>
            <li>✔ Middleware support</li>
          </ul>
        </div>

        {/* Redux */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-purple-600 mb-3">Redux</h3>
          <p className="text-gray-600 text-sm">
            Powerful state management library for large applications.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Predictable state flow</li>
            <li>✔ DevTools powerful</li>
            <li>❌ Boilerplate heavy</li>
            <li>❌ Steeper learning curve</li>
          </ul>
        </div>
      </div>

      {/* When to Use What */}
      <div className="max-w-5xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          When Should You Use Each?
        </h2>

        <div className="text-gray-600 space-y-3">
          <p>
            <span className="font-semibold">useState:</span> For local UI state
            like modals or input fields.
          </p>
          <p>
            <span className="font-semibold">Context API:</span> For small to
            medium global state needs.
          </p>
          <p>
            <span className="font-semibold">Zustand:</span> For scalable global
            state without heavy setup.
          </p>
          <p>
            <span className="font-semibold">Redux:</span> For very large
            enterprise-level applications requiring strict architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
