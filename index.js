import * as comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";
const init = async () => {
  const worker = new Worker("worker.js");
  const obj = comlink.wrap(worker);
  alert(`Counter: ${await obj.counter}`);
  await obj.inc();
  alert(`Counter: ${await obj.counter}`);
}
init();