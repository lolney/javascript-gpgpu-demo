import { KernelFunction } from "gpu.js";

const gpuMultiply: KernelFunction = function(input: number[]) {
  let accumulator = 0;
  for (let i = 1; i <= 5000; i++) {
    accumulator += (input[this.thread.x] + 1) / i;
  }
  return accumulator;
};

export default gpuMultiply;
