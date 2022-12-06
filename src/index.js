import React from "react"
import ReactDOM from "react-dom"
import MainContainer from "./hookBased/MainContainer";
import "./hookBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
