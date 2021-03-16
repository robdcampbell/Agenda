import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useAgenda } from "./context/AgendaContext";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
