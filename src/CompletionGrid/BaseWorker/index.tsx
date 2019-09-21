import React, { useEffect, useState, useCallback } from "react";
import { useList } from "react-use";
import { CompletionGrid } from "../Base";

type CompletionGridWorkerProps = {
  isStarted: boolean;
  worker: Worker;
};

const CompletionGridWorker: React.FC<CompletionGridWorkerProps> = ({
  isStarted,
  worker
}) => {
  const [completedCount, updateCount] = useState(0);

  useEffect(() => {
    if(isStarted) worker.postMessage("start");
  }, [worker, isStarted]);

  useEffect(() => {
    worker.onmessage = () =>
      updateCount((completedCount: number) => completedCount + 1);
  }, [worker]);

  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridWorker;
