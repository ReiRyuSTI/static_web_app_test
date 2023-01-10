import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterConfig } from "./router/RouterConfig";
import { Link } from "react-router-dom";

function App() {
  return (
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
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
      <RouterConfig />
    </div>
  );
}

export default App;
