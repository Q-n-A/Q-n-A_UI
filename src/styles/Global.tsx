import { css, Global } from "@emotion/react";
import { VFC } from "react";

const GlobalStyle: VFC = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        .button {
          border-width: calc(1.5px + 0.3vmin);
          font-size: calc(10px + 2vmin);
        }

        .link {
          color: #61dafb;
        }
      `}
    />
  );
};

export default GlobalStyle;
