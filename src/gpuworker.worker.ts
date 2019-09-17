import { GPU } from "gpu.js";

const ctx: Worker = self as any;

const gpu = new GPU();
const multiplyMatrix = gpu
  .createKernel(function(a: Number[]) {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    return sum;
  })
  .setOutput([1000]);

const input = new Array(1000).fill(0);

const doWork = () => multiplyMatrix(input);

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      console.log("gpu");
      ctx.postMessage("message");
    });
});

export default ctx;
