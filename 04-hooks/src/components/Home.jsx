const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">
        React Hooks – With Practical Examples
      </h1>

      <p className="mb-12 leading-relaxed">
        React Hooks allow functional components to manage state, handle side
        effects, access the DOM, and optimize performance. This project focuses
        on understanding hooks through <b>real use cases</b> and
        <b> hands-on examples</b> rather than theory alone.
      </p>

      {/* ================= State Management ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">🧠 State Management</h2>

        <div className="space-y-5">
          {/* useState */}
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">🔹 useState</h3>
            <p>
              <b>What it does:</b> Manages local component state such as
              numbers, strings, booleans, and objects.
            </p>
            <p className="mt-2">
              <b>Used in this project:</b> Counters, dependent dropdowns
              (Country → State → City), form inputs, and toggles.
            </p>
            <p className="mt-2">
              <b>Real-world example:</b> Shopping cart quantity, form values,
              theme toggles, like buttons.
            </p>
          </div>

          {/* useContext */}
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">🔹 useContext</h3>
            <p>
              <b>What it does:</b> Shares data globally without passing props
              through every component (avoids prop drilling).
            </p>
            <p className="mt-2">
              <b>Used in this project:</b> Global theme (Light / Dark) accessed
              by Navbar, Home, and all pages.
            </p>
            <p className="mt-2">
              <b>Real-world example:</b> Authentication data, theme settings,
              language preferences, user profile.
            </p>
          </div>

          {/* useReducer */}
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">🔹 useReducer</h3>
            <p>
              <b>What it does:</b> Manages complex state logic using actions and
              reducers, similar to Redux.
            </p>
            <p className="mt-2">
              <b>Used in this project:</b> Todo list with add and remove
              actions.
            </p>
            <p className="mt-2">
              <b>Real-world example:</b> Order management, form validation
              states, step-based workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Side Effects ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">🔁 Side Effects</h2>

        <div className="p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-semibold mb-1">🔹 useEffect</h3>
          <p>
            <b>What it does:</b> Runs side effects after rendering, such as API
            calls, subscriptions, timers, and localStorage access.
          </p>
          <p className="mt-2">
            <b>Used in this project:</b> Fetching API data, auto-save drafts,
            resize listeners, and cleanup logic.
          </p>
          <p className="mt-2">
            <b>Real-world example:</b> Fetching user data, saving drafts,
            listening to window resize or scroll events.
          </p>
        </div>
      </section>

      {/* ================= DOM Access ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">🧩 DOM Access</h2>

        <div className="p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-semibold mb-1">🔹 useRef</h3>
          <p>
            <b>What it does:</b> Accesses DOM elements directly and stores
            mutable values without causing re-renders.
          </p>
          <p className="mt-2">
            <b>Used in this project:</b> Timer intervals, DOM button
            manipulation, scroll-to-image functionality.
          </p>
          <p className="mt-2">
            <b>Real-world example:</b> Focus input fields, stop timers, track
            previous values, control media playback.
          </p>
        </div>
      </section>

      {/* ================= Performance ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          ⚡ Performance Optimization
        </h2>

        <div className="space-y-5">
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">🔹 useMemo</h3>
            <p>
              <b>What it does:</b> Memoizes expensive calculations so they don’t
              run on every render.
            </p>
            <p className="mt-2">
              <b>Used in this project:</b> Preventing slow calculations from
              re-running when unrelated state changes.
            </p>
            <p className="mt-2">
              <b>Real-world example:</b> Filtering large lists, calculating
              totals, heavy data processing.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">🔹 useCallback</h3>
            <p>
              <b>What it does:</b> Memoizes functions to prevent unnecessary
              re-creation on re-renders.
            </p>
            <p className="mt-2">
              <b>Used in this project:</b> Passing stable callbacks to memoized
              child components.
            </p>
            <p className="mt-2">
              <b>Real-world example:</b> Optimized forms, button handlers in
              dashboards, reusable components.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 p-5 rounded-xl border-2">
        <p className="font-medium">
          👉 Use the navigation menu to explore each hook with live demos and
          practical examples based on real-world scenarios.
        </p>
      </div>
    </div>
  );
};

export default Home;
