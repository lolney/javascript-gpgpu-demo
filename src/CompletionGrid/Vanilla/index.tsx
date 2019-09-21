import React, { useEffect, useState } from "react";
import { useList } from "react-use";
import CompletionGridWorker from "../BaseWorker";
import Worker from "../../workers/worker.worker";

// @ts-ignore
const worker = new Worker();

const CompletionGridNormal: React.FC<{ isStarted: boolean }> = ({isStarted}) => (
  <CompletionGridWorker isStarted={isStarted} worker={worker} />
);

export default CompletionGridNormal;
