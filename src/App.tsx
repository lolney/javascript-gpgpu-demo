import React, { useState } from "react";
import CompletionGrid from "./CompletionGrid/BaseWorker";
import GpuWorker from './workers/gpuworker.worker';
import VanillaWorker from './workers/worker.worker';
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [workersCompleted, setWorkersCompleted] = useState(0);
  const start = () => {
    setIsStarted(true);
    setWorkersCompleted(0);
  }
  const stop = () => {
    setIsStarted(false);
    setWorkersCompleted(0);
  }
  const setDone = () => {
    if(workersCompleted === 1) stop();
    else setWorkersCompleted(state => state + 1);
  }

  return (
    <header className="root">
      <h1>Demo</h1>
      <button onClick={isStarted ? stop : start}>{isStarted ? "Stop" : "Start"}</button>
      <div className="demo-container">
        <div className="grid-wrapper">
          <h2>Vanilla Javascript</h2>
          <CompletionGrid isStarted={isStarted} setDone={setDone} Worker={VanillaWorker}/>
        </div>
        <div className="grid-wrapper">
          <h2>Uses the GPU</h2>
          <CompletionGrid isStarted={isStarted} setDone={setDone} Worker={GpuWorker} />
        </div>
      </div>
    </header>
  );
};

export default App;
