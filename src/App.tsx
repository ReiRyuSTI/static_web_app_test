import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterConfig } from "./router/RouterConfig";
import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./auth/config";
import { PublicClientApplication } from "@azure/msal-browser";

function App() {
  const pca = new PublicClientApplication(msalConfig);

  return (
    <MsalProvider instance={pca}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
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
