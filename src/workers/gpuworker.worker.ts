import { GPU } from "gpu.js";
import workload from '../workloads/gpuMultiply';

const ctx: Worker = self as any;
const n = 5000;
const n_2 = n * n;

const gpu = new GPU();
const doWork = gpu
  .createKernel(workload)
  .setPipeline(true)
  .setImmutable(true)
  .setOutput([n, n]);

const input = new Array(n_2).fill(1);

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      doWork(input);
      ctx.postMessage("message");
    });
});

export default ctx;
