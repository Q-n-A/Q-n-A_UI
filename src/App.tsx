import { css, keyframes } from "@emotion/react";
import { VFC } from "react";

import Router from "./router/Router";

import logo from "/logo.svg";

const keyframe = {
  spin: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
};
const style = {
  app: css`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
  `,
  header: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-top: 5rem;
  `,
  logo: css`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${keyframe.spin} infinite 20s linear;
    }
  `,
};

const App: VFC = () => {
  return (
    <div css={style.app}>
      <header css={style.header}>
        <img src={logo} css={style.logo} alt="logo" />
        <Router />
      </header>
    </div>
  );
};

export default App;
