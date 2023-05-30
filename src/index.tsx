import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <div
      style={{ backgroundColor: "red", width: "1000px", height: "500px" }}
    ></div> */}
    <App />
  </React.StrictMode>
);
