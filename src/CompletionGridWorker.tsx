import React, { useEffect, useState, useCallback } from "react";
import { useList } from "react-use";
import { CompletionGrid } from "./CompletionGrid";

type CompletionGridWorkerProps = {
  worker: Worker;
};

const CompletionGridWorker: React.FC<CompletionGridWorkerProps> = ({
  worker
}) => {
  const [completedCount, updateCount] = useState(0);

  useEffect(() => {
    worker.onmessage = () =>
      updateCount((completedCount: number) => completedCount + 1);
    worker.postMessage("start");
  }, [worker]);

  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridWorker;
