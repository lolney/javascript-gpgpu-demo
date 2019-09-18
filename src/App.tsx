import React from "react";
import CompletionGridNormal from "./CompletionGridNormal";
import CompletionGridGPGPU from "./CompletionGridGPGPU";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <header className="root">
      <h1>Demo</h1>
      <div className="demo-container">
        <div className="grid-wrapper">
          <h2>Vanilla Javascript</h2>
          <CompletionGridNormal />
        </div>
        <div className="grid-wrapper">
          <h2>Uses the GPU</h2>
          <CompletionGridGPGPU />
        </div>
      </div>
    </header>
  );
};

export default App;
