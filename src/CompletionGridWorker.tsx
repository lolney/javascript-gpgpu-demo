import React, { useEffect, useState } from "react";
import { useList } from "react-use";
import { CompletionGrid } from "./CompletionGrid";
import worker from "./worker.worker.js";

const CompletionGridWorker: React.FC = () => {
  const [completedCount, updateCount] = useState(0);

  useEffect(() => {
    worker.onmessage = () => updateCount(completedCount + 1);
    return () => {
      worker.terminate();
    };
  });

  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridWorker;
