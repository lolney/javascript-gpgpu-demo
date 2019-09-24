export default function gpuMultiply(input: Number[]) {
  let accumulator = 0;
  for (let i = 1; i <= 5000; i++) {
    // @ts-ignore
    accumulator += (input[this.thread.x] + 1) / i;
  }
  return accumulator;
};