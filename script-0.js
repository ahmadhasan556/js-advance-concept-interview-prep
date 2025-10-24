// when script run js create autometically gloabal execution context then it create two phases memory phase and code excution phase

// in memory phase js create memory space for variable and function -- variable are initialized with undefined and function are stored with their defination -- no value in memory phase only load variable and function

// in code phase js execute the code line by line and assign values to variables and execute functions
// when code execution reach to the line where variable is declared and initialized then only variable get value

// Temporal dead zone
// let and const create tdz
// in case of let and const hoisting happen but variable is not initialized with undefined
// let or const hoist but can not be accessed before initialization

x = 20;

console.log(`Value of x is: ${x}`);

// value of x undefined at this point due to hoisting (Hoisting --> JavaScript's default behavior of moving declarations to the top)
var x = 10; // Variable declaration and initialization

console.log(`Value of x after initialization is: ${x}`);
//  visual representation
// https://excalidraw.com/#json=ftmZ9jU0Ak2WK-dgCLWmw,_7e1kGAs9eEaCHwCXAiuvA
