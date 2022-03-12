import { VFC } from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";

import Main from "../components/Main";
import Ping from "../components/Ping";
import Settings from "../components/Settings";

const Router: VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ping" element={<Ping />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
