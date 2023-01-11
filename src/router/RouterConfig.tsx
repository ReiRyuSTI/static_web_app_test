import { useMsal } from "@azure/msal-react";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { loginRequest } from "../auth/config";

export const RouterConfig = () => {
  const { instance } = useMsal();

  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button onClick={() => instance.loginRedirect(loginRequest)}>
                login
              </button>
              <button onClick={() => instance.logout()}>logout</button>
            </>
          }
        />
        <Route path="test" element={<>login fin</>} />
      </Routes>
    </BrowserRouter>
  );
};
