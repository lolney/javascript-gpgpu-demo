import React, { useEffect, useState } from "react";
import CompletionGridWorker from "./CompletionGridWorker";
import Worker from "./gpuworker.worker";

// @ts-ignore
const worker = new Worker();

const CompletionGridGPGPU: React.FC = () => (
  <CompletionGridWorker worker={worker} />
);

export default CompletionGridGPGPU;
