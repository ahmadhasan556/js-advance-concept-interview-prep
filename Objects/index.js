// objects in js are used to store multiple values in a single variable.
// advantages of objects:
// 1. Objects allow you to group related data together.
// 2. Objects provide a way to structure data in a meaningful way.
// disadvantages of objects:
// 1. Objects can be more complex to work with than primitive data types.
// 2. it does not have blueprints like classes in other programming languages.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const person2 = {
  name: "Jane",
  age: 30,
  city: "New York",
};

// when we use function to create multiple objects with same properties and methods,and it will give the base blueprint for creating objects with similar structure.

// function constructor -- a function that is used to create objects.

// before es6 .

// function constructor
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.getName = function () {
    return this.name;
  };
}

const p1 = new Person("John", 30, "New York");
const p2 = new Person("John", 30, "New York");

console.log(p1.getName());

// after es6 introducing a class keyword to create objects.
// class is a blueprint for creating objects with similar structure.
// constructor is a special method for creating and initializing an object created with a class.
class Persons {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getContact() {
    console.log(this.name);
  }
  getName() {
    console.log(this.name);
  }
}
const p11 = new Persons("ahmad", 30, "New York");
const p22 = new Persons("John", 30, "New York");
p11.getName();
