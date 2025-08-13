import React from "react";
import Weather from "./Weather";
import "./css/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Buffalo" />
      </div>
    </div>
  );
}
