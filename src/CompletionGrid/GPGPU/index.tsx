import React, { useEffect, useState } from "react";
import CompletionGridWorker from "../BaseWorker";
import Worker from "../../workers/gpuworker.worker";

// @ts-ignore
const worker = new Worker();

const CompletionGridGPGPU: React.FC<{isStarted: boolean}> = ({isStarted}) => (
  <CompletionGridWorker isStarted={isStarted} worker={worker} />
);

export default CompletionGridGPGPU;
