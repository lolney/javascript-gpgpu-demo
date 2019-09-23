export default function gpuMultiply(input: Number[]) {
  let output = 0;
  for (let i = 1; i <= 5000; i++) {
    // @ts-ignore
    output += (input[this.thread.x] + 1) / i;
  }
  return output;
};