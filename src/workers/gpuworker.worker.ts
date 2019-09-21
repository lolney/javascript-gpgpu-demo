import { GPU } from "gpu.js";
import simpleMultiply from '../workloads/simpleMultiply';

const ctx: Worker = self as any;

console.log(simpleMultiply);
const gpu = new GPU();
const doWork = gpu
  .createKernel(simpleMultiply)
  .setOutput([1]);

const input = new Array(1).fill(0);

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      doWork(input);
      ctx.postMessage("message");
    });
});

export default ctx;
