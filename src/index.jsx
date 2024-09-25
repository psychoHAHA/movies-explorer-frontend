import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="https://psychohaha.github.io/movies-explorer-frontend/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

