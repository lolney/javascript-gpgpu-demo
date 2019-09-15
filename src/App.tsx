import React from "react";
import CompletionGridWorker from "./CompletionGridWorker";
import CompletionGridGPGPU from "./CompletionGridGPGPU";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CompletionGridWorker />
        <CompletionGridGPGPU />
      </header>
    </div>
  );
};

export default App;
