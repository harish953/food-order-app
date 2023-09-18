import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);
