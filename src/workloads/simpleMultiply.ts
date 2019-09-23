export default function simpleMultiply(input: Number[]) {
  const n = 5000 * 5000;
  const output = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    output[i] = i * 10;
  }
  return output;
};