import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>abc</>} />
        <Route path="test" element={<>test</>} />
      </Routes>
    </BrowserRouter>
  );
};
