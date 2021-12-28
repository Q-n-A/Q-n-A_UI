import { useState, VFC } from "react";
import { Link } from "react-router-dom";

const Main: VFC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello Vite + React!</p>
      <p className="py-3">
        <button
          className="px-2 rounded-md button"
          type="button"
          onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        {" | "}
        <a
          className="link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer">
          Vite Docs
        </a>
        {" | "}
        <Link className="link" to="/settings">
          Settings
        </Link>
      </p>
    </>
  );
};

export default Main;
