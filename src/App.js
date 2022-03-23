import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="background-image">
      <div className="App card">
        <header className="App-header container pt-5">
          <h1>Pomodoro Timer</h1>
        </header>
        <div className="container mt-5">
          <Pomodoro />
        </div>
      </div>
    </div>
  );
}

export default App;
