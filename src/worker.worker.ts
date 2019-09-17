const ctx: Worker = self as any;

const doWork = () =>
  Array(1000)
    .fill(0)
    .map((_, i) => i * 10);

ctx.addEventListener("message", event => {
  Array(100)
    .fill(0)
    .forEach((_, i) => {
      doWork();
      ctx.postMessage(i);
    });
});

export default ctx;
