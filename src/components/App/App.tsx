import React from "react";
import "./App.css";
import { Content } from "../Content";

export function App() {
  return (
    <div className="App">
      <img
        className="logo"
        ref="../../images/Logo-2.png"
        alt="logoAviasales"
      ></img>
      <Content />
    </div>
  );
}
