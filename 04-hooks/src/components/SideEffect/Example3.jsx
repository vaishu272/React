import { useEffect, useState } from "react";

const Example3 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Mounting
    window.addEventListener("resize", handleResize);

    // Cleanup (Unmounting)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-xl shadow-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">useEffect - Window Resize</h2>

        <p className="text-sm leading-relaxed">
          This example listens to the browser window resize event and updates
          state whenever the window width changes.
        </p>

        <div className="border-t pt-4">
          <p className="text-lg">Current Window Width</p>
          <p className="text-3xl font-bold mt-2">{width}px</p>
        </div>
      </div>
    </div>
  );
};

export default Example3;

// Mounting Phase: It is called when the component is first rendered and added to the DOM. It is used to perform any setup or initialization tasks, such as fetching data or setting up event listeners.

// useEffect(() => {
//   alert(
//     "Updating on the every render of the component it called mounting phase and then run counter function",
//   );
// });

// Updating Phase: It is called when the component's state or props change. It is used to perform any updates or side effects that are necessary based on the new state or props.

// useEffect(() => {
//   alert(
//     "Updating only on the first render of the component it called mounting phase and then run counter function",
//   );
// }, []);

// useEffect(() => {
//   alert(
//     "Updating only when the count state changes it called updating phase and then run counter function",
//   );
// }, [count]);

// useEffect(() => {
//   alert(
//     "Updating only when the count or total state changes it called updating phase and multiple dependencies and then run counter function",
//   );
// }, [count, total]);

// Unmounting Phase: It is called when the component is removed from the DOM. It is used to perform any cleanup tasks, such as removing event listeners or canceling network requests.
// useEffect(() => {
//   return () => {
//     alert(
//       "Component is unmounted and cleanup function is called when component is removed from the DOM",
//     );
//   };
// }, [count]);
