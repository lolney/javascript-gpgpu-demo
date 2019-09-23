export default function simpleMultiply(input: Number[]) {
  const n = 50000;
  const m = 5000;
  const output = new Array(n).fill(1);

  for(let i=1; i<=n; i++) {
    let accum = 0;
    for (let j = 1; j<=m; j++) {
      accum += j / i;
    }
    output[i] = accum;
  }

  return output;
};