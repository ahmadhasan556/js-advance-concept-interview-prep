// Object Oriented Programming System (OOPS) Example in JavaScript

// defination --- Creating a class using ES6 syntax
// Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.

// OOP was developed to make code more flexible and easier to maintain.

// There are four major piller of OOP:
// 1. Encapsulation -- Bundling data and methods that operate on that data within one unit, e.g., a class in JavaScript.
// 2. Inheritance -- Creating a new class that inherits properties and methods from an existing class.
// 3. Polymorphism -- The ability of different classes to be treated as instances of the same class through a common interface.
// 4. Abstraction -- Hiding complex implementation details and showing only the essential features of the object.

// | Pillar        | Meaning                         | Example                              |
// | ------------- | ------------------------------- | ------------------------------------ |
// | Encapsulation | Hiding data                     | Private fields in classes            |
// | Abstraction   | Hiding complexity               | Simple interface for complex process |
// | Inheritance   | Reusing code                    | `class Dog extends Animal`           |
// | Polymorphism  | Same method, different behavior | `speak()` in `Bird` and `Parrot`     |

// oop exapmle
// Object-Oriented Programming (OOP) is a way of structuring code so that it’s organized around objects rather than functions or logic.
// Each object represents a real-world entity with properties (data) and methods (actions).
class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  start() {
    console.log(`${this.name} ${this.model} is starting.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();

// Encapsulation Example
// Hiding data (variables) inside a class and exposing only necessary parts via methods.
// It protects the data from being accessed or modified directly.
class Account {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account();
myAccount.deposit(100);
console.log(myAccount.getBalance());
// acc.balance; // Error: Private field '#balance' must be declared in an enclosing class

//  Abstraction
// Showing only the essential features and hiding the complex details.
// You interact with what an object does, not how it does it.
class CoffeMachine {
  start() {
    this._heatWater();
    console.log("Coffe is ready!");
  }

  _heatWater() {
    console.log("Heating water...");
  }
}

const machine = new CoffeMachine();
machine.start();
// machine._heatWater(); // Error: Method is private

// Inheritance

// Allows one class to inherit properties and methods from another class.
// Promotes code reuse and avoids repetition.

class Animal {
  eat() {
    console.log("Eating...");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const dog = new Dog();
dog.eat();
dog.bark();

// Polymorphism
// Means “many forms.”
// Different classes can define methods with the same name but with different behavior.

class Animals {
  makeSound() {
    console.log("Some generic sound");
  }
}
class Dogs extends Animals {
  makeSound() {
    console.log("Bark");
  }
}

class Cats extends Animals {
  makeSound() {
    console.log("Meow");
  }
}

// Same method name, but different behaviors
const animals = [new Dogs(), new Cats()];

animals.forEach((a) => a.makeSound());
