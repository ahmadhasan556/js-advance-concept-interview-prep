// if we create a variable then it's value is undefined and if we create a function then it's value is the function itself in the global execution context of JavaScript (mean in memory phase of global execution context).

// when we call the function in js then js create it's local context and in that local context if we create a variable then it's value is undefined and if we create a function then it's value is the function itself in the local execution context of JavaScript (mean in memory phase of local execution context). note: it will delete the local context after the function execution is completed.

console.log("Global execution context starts");

var gloabalVariable = "i am a global variable";

function globalFunction() {
  console.log("I am a global function");
}

console.log(gloabalVariable);

globalFunction();

console.log("Global context execution ends");
// visual representation of global execution context
// https://excalidraw.com/#json=ftmZ9jU0Ak2WK-dgCLWmw,_7e1kGAs9eEaCHwCXAiuvA
