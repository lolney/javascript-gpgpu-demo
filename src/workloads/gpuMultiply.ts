export default function gpuMultiply(input: Number[]) {
  // @ts-ignore
  return 10 * input[this.thread.x];
};