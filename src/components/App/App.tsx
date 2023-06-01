import React from "react";
import classes from "./App.module.scss";
import logo from "../../images/Logo-2.png";
import { Content } from "../Content";

export function App() {
  return (
    <div className={classes.app}>
      <img className={classes["app-logo"]} src={logo} alt="logo"></img>
      <Content />
    </div>
  );
}
