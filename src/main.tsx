import React from "react";
import ReactDOM from "react-dom";
import "virtual:windi.css";
import App from "./App";
import GlobalStyle from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
