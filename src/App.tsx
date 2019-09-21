import React, { useState } from "react";
import VanillaCompletionGrid from "./CompletionGrid/Vanilla";
import GpgpuCompletionGrid from "./CompletionGrid/GPGPU";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const start = () => setIsStarted(true);

  return (
    <header className="root">
      <h1>Demo</h1>
      <button disabled={isStarted} onClick={start}>Start</button>
      <div className="demo-container">
        <div className="grid-wrapper">
          <h2>Vanilla Javascript</h2>
          <VanillaCompletionGrid isStarted={isStarted}/>
        </div>
        <div className="grid-wrapper">
          <h2>Uses the GPU</h2>
          <GpgpuCompletionGrid isStarted={isStarted}/>
        </div>
      </div>
    </header>
  );
};

export default App;
