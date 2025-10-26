// In Js everything is object

// what is prototype -- Def: An object from which other objects inherit properties.in roman we say "Virasat" -- prototype aik object hota hai jisse doosre objects apni properties aur methods inherit karte hain.

// what is __proto__ -- Def: A hidden property that points to an object's prototype. -- in Roman -- __proto__ aik hidden property hoti hai jo har object ke andar hoti hai aur yeh us object ke prototype ko point karti hai.

// prototype based inheritance

// this is a variable of String class. Here String is a built-in class in Js.
// When we create a string like this, Js internally creates an object of String class.
// So, here a is a primitive string, but b is an object of String class.
// Both a and b can access the methods of String class because Js automatically converts primitive strings to String objects when we try to access their methods.
// This is called "boxing" or "wrapping" or wrapper class.
// So, in Js, primitive types have wrapper classes that provide methods to work with them.
// For example, Number, String, Boolean, etc. are wrapper classes for primitive types number, string, and boolean respectively.
// When we create a primitive type, Js automatically creates an object of the corresponding wrapper class when we try to access its methods.
let a = "ahmad";
let b = new String("hasan");

a.__proto__; // points to String.prototype or String class
a.__proto__.__proto__; // points to Object.prototype or main Object class or Object.__proto__ is null
console.log(a);
console.log(b);

const p1 = {
  fname: "ahmad",
  lname: "hasan",
  getFullName() {
    return `${this.fname} ${this.lname}`;
  },
};

const p2 = Object.create(p1); // p2 inherits from p1

console.log(p1.fname);
console.log(p2.fname);

// prototypical inheritance in Js or prototype chain

const p11 = {
  xp1: "i am xp1 from p11",
};

const p12 = {
  xp1: "i am xp1 from p12",
  __proto__: p11, // p12 inherits from p11
};

const p13 = {
  xp1: "i am xp1 from p13",
  __proto__: p12, // p13 inherits from p12
};
// now we can access the properties of p11 and p12 from p13 because of prototype chain
// p13 --> p12 --> p11 --> Object.prototype --> null
// here p13 is the child of p12 and p12 is the child of p11
// and Object.prototype is the parent of all objects in Js
// and null is the end of the prototype chain
// if we try to access a property that is not present in p13, Js will look for it in p12, if not found then in p11, and so on until it reaches Object.prototype and null.
// this is called prototype chain

// Note: __proto__ is a deprecated way to set prototype. The recommended way is to use Object.create() or Object.setPrototypeOf().
// Any class or anything in JS __proto__ Object.

// everything in Js is object or inherits from object.

// differnce in __proto__ and prototype
// 1. __proto__ is a hidden property of an object that points to its prototype.
// 2. prototype is a property of a function that is used to set the prototype of the objects created by that function when used as a constructor.
// 3. __proto__ is attached to every object in Js.
// 4. prototype is only attached to the base class .

// __proto__ is the actual object that is used in the lookup chain to resolve methods and properties.
// prototype is just a property of a function that is used to set the __proto__ of the objects created by that function.
