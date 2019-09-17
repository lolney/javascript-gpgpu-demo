import React, { useEffect, useState } from "react";
import { useList } from "react-use";
import { CompletionGrid } from "./CompletionGrid";
import Worker from "./worker.worker";

// @ts-ignore
const worker = new Worker();

const CompletionGridWorker: React.FC = () => {
  const [completedCount, updateCount] = useState(0);

  useEffect(() => {
    worker.onmessage = (e: any) => {
      updateCount(completedCount + 1);
    };
    worker.postMessage("start");
  }, [0]);

  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridWorker;
