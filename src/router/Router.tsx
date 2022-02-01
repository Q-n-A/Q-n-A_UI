import { VFC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Settings from "../components/Settings";
import Main from "../components/Main";
import Ping from "../components/Ping";

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
