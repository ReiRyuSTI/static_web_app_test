import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MoguTopPage } from "components/pages/MoguTopPage";

export const RouterConfig = () => {
  // const { loginAzure, logoutAzure, checkAuth } = useAuthAzure();
  // const accountCheck = checkAuth();
  // useEffect(() => {
  //   console.log(accountCheck);
  // }, [accountCheck]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <button onClick={loginAzure}>login</button>
              <button onClick={logoutAzure}>logout</button>
            </>
          }
        /> */}
        {/* <Route path="test" element={<>login fin</>} /> */}
        <Route path="/" element={<MoguTopPage />} />
      </Routes>
    </BrowserRouter>
  );
};
