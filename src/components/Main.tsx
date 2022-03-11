import { css } from "@emotion/react";
import { useState, VFC } from "react";
import { Link } from "react-router-dom";

const styles = {
  button: css`
    border-radius: 0.375rem;
    padding: 0.375rem 0.5rem;
    border-width: calc(1.5px + 0.3vmin);
    font-size: calc(10px + 2vmin);
    background: transparent;
    color: white;
    border: solid 0.2rem white;
    margin: 1rem;
  `,
  link: css`
    color: #61dafb;
  `,
};

const Main: VFC = () => {
  document.title = "Q'n'A - traP Anonymous Question Box Service";

  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello Vite + React!</div>
      <button
        css={styles.button}
        onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <div>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </div>
      <div>
        <a
          css={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        {" | "}
        <a
          css={styles.link}
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer">
          Vite Docs
        </a>
        {" | "}
        <Link css={styles.link} to="/settings">
          Settings
        </Link>
      </div>
    </>
  );
};

export default Main;
