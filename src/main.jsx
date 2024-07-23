// Index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab); // Include all free-brands-svg-icons

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
