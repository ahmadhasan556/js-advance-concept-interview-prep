// to run js we need js engine like V8 (chrome, nodejs) , SpiderMonkey (firefox) , JavaScriptCore (safari)
// call stack is actual js engine.
// if we need to execute any js code , it goes to call stack first.(firs in last out -- FILO, last in first out -- LIFO)
// we push thing on stack from top and we pop thing from top only.
// call stack wait for nothings
// settimeout not a part of js engine , it is a web api provided by browser.
// when synchronous code is executed , first it run all synchronous code then it check for asynchronous code.
// and it send the asynchronous code to web api (like settimeout, fetch etc) to handle it.
// when web api complete the task it push the callback function to task queue.
// task queue is also called callback queue.
// then callback queue wait for call stack to be empty.
// then it send to event loop to push the callback function to call stack.
// event loop is a process which monitor call stack and task queue.
// when call stack is empty event loop push the first function from task queue to call stack.
// event loop pick task queue when call stack is empty only.

console.log("start if script-2.js");
setTimeout(() => {
  console.log(`This is from the task queue`);
}, 2000);

console.log(`end of script`);
