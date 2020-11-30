import React from "react";
import { Offers } from "./features/offers/Offers";
import { Total } from "./features/offers/Total";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <Offers />
    </header>
    <Total />
  </div>
);

export default App;
