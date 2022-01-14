import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/header/header.js";
import { Card } from "./components/image-card/Card.js";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__card-list">
        <Card date={"2022-01-13"} />
      </div>
    </div>
  );
}
export default App;
