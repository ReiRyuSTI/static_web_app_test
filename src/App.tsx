import React from "react";
import "./App.css";
import { RouterConfig } from "router/RouterConfig";
import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./auth/config";
import { PublicClientApplication } from "@azure/msal-browser";

function App() {
  const pca = new PublicClientApplication(msalConfig);
  const data = process.env.REACT_APP_HELLO_WORLD || "non data";
  console.log(data);

  return (
    <MsalProvider instance={pca}>
      <div className="App">
        {data}
        <header className="App-header">
          <p className="text-red-500">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link test"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <RouterConfig />
      </div>
    </MsalProvider>
  );
}

export default App;
