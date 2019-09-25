import React, { useEffect, useState } from "react";
import { CompletionGrid } from "../Base";

type CompletionGridWorkerProps = {
  isStarted: boolean;
  setDone: () => void,
  Worker: Worker;
};

const CompletionGridWorker: React.FC<CompletionGridWorkerProps> = ({
  isStarted,
  setDone,
  Worker
}) => {
  const [completedCount, updateCount] = useState(0);
  const [worker, setWorker] = useState<Worker | undefined>();

  useEffect(() => {
    if(isStarted && !worker) {
      // @ts-ignore
      const worker = new Worker();
      updateCount(0);
      worker.postMessage("start");
      setWorker(worker);
    }
    else if(!isStarted && worker) {
      worker.terminate();
      setWorker(undefined);
    }
  }, [Worker, worker, isStarted]);

  useEffect(() => {
    if(worker) worker.onmessage = () =>
      updateCount((completedCount: number) => completedCount + 1);
  }, [worker]);

  useEffect(() => {
    if (completedCount === 100)
      setDone();
  }, [setDone, completedCount]);


  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridWorker;