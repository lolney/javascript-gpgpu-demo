import simpleMultiply from '../workloads/simpleMultiply';

const ctx: Worker = self as any;

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      simpleMultiply([]);
      ctx.postMessage(i);
    });
});

export default ctx;
