import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
      <Routes>
        <Route path="/" element={<>abc</>} />
        <Route path="test" element={<>test</>} />
      </Routes>
    </BrowserRouter>
  );
};
