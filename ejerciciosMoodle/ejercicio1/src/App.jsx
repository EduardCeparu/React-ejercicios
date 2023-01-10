import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row m-auto">
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
        </div>
        <div className="row m-auto">
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
        </div>
      </div>
    </>
  );
}

export default App;
