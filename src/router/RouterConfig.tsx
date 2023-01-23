import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { useAuthAzure } from "hooks/authAzure";

export const RouterConfig = () => {
  const { loginAzure, logoutAzure, checkAuth } = useAuthAzure();
  const accountCheck = checkAuth();
  useEffect(() => {
    console.log(accountCheck);
  }, [accountCheck]);

  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button onClick={loginAzure}>login</button>
              <button onClick={logoutAzure}>logout</button>
            </>
          }
        />
        <Route path="test" element={<>login fin</>} />
      </Routes>
    </BrowserRouter>
  );
};
