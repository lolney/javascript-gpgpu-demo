import React from "react";
import CompletionGridNormal from "./CompletionGridNormal";
import CompletionGridGPGPU from "./CompletionGridGPGPU";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CompletionGridNormal />
        <CompletionGridGPGPU />
      </header>
    </div>
  );
};

export default App;
