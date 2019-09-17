import React, { useEffect, useState } from "react";
import { useList } from "react-use";
import CompletionGridWorker from "./CompletionGridWorker";
import Worker from "./worker.worker";

// @ts-ignore
const worker = new Worker();

const CompletionGridNormal: React.FC = () => (
  <CompletionGridWorker worker={worker} />
);

export default CompletionGridNormal;
