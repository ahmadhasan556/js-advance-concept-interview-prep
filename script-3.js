// microtask has higher proiority than macrotask
// so Promise will be executed before setTimeout
// promises also part of web api.
// https://www.jsv9000.app/ to visualize call stack , web api , task queue , microtask queue and event loop.

// starvation in js -- it occurs when microtask queue is continuously filled with tasks and call stack never gets empty to pick tasks from task queue.

console.log("start of script-3.js");

setTimeout(() => {
  console.log("This is from script-3.js after 1 second");
}, 1000);

Promise.resolve().then(() => {
  console.log("This is from script-3.js Promise microtask queue");
});

console.log("end of script-3.js");
