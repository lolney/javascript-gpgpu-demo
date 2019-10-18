import { GPU } from "gpu.js";
import workload from "../workloads/gpuMultiply";

const ctx: Worker = self as any;
const n = 5000;
const n_2 = n;

const gpu = new GPU();
const doWork = gpu
  .createKernel(workload)
  .setImmutable(true)
  .setPipeline(true)
  .setOutput([n]);

const input = new Array(n_2).fill(1).map(() => Math.random());

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      const result = doWork(input);
      ctx.postMessage("message");
    });
});

export default ctx;
