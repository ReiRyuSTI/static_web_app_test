import React from "react";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { RouterConfig } from "router/RouterConfig";
import "./App.css";

import { msalConfig } from "./auth/config";

function App() {
  const pca = new PublicClientApplication(msalConfig);
  // const data = process.env.REACT_APP_HELLO_WORLD || "non data";
  // console.log(data);

  return (
    <MsalProvider instance={pca}>
      <div className="">
        <RouterConfig />
      </div>
    </MsalProvider>
  );
}

export default App;
