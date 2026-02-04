// Functional Patterns
// Callbacks and IIFE.
// Limitations of callbacks (e.g., callback hell).
// Function currying and partial functions.

// Object-Oriented Programming (OOP)
// new keyword functionality.
// Constructor functions and their properties.
// Public, private, and static members in OOP.



// new keyword functionality.


function User(name) {
    this.name = name
}

const petr = new User('Петр')

console.log(petr.name)

User.prototype.sayHi = function () {
  console.log(this.name);
};

petr.sayHi()

console.log(petr instanceof User)

// new — что это реально делает
// Что происходит при new User():
// Создаётся пустой объект {}
// Этот объект связывается с User.prototype
// this внутри User указывает на этот объект
// Если конструктор не возвращает объект, возвращается this

// const obj = {};
// obj.__proto__ = User.prototype;
// User.call(obj, "Dima");
// return obj;


// отличия от классов
// всплытие (класс не всплывает)
// в функциях по сути нет приватных полей, как в классах. Только замыкание
// классы всегда в use strict

// от объектов
// свой портотип Object.getPrototypeOf(user) === Object.prototype; // true vs Object.getPrototypeOf(petr) === User.prototype; // true
// общий статик метод (в примере, sayHi используется для всех User)
// instanceof




// class User {
//   #password;
//   static role = "USER";

//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }

//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }


// function User(name, password) {
//   let _password = password;
//   this.name = name;

//   this.checkPassword = function (pw) {
//     return _password === pw;
//   };
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I'm ${this.name}`);
// };

// User.createGuest = function () {
//   return new User("Guest", "guest");
// };


// function sum(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const sumTwo = sum(2)
// console.log(sumTwo(3))

// function add(a, b, c) {
//   return a + b + c;
// }

// const add5 = (b, c) => add(5, b, c);


// function add(a, b, c) {
//   return a + b + c;
// }

// const add10 = add.bind(null, 10);

// add10(5, 2); 



// Можно сказать так:
// Все три создают новую функцию с “зафиксированным значением” — в этом смысле они похожи.
// Но строго по определениям:
// (1) — каррирование
// (2), (3) — частичное применение

// Мини-правило, чтобы не путаться
// Если исходная функция была add(a, b, c) и ты фиксируешь часть аргументов → partial application
// Если исходная функция уже a => b => c => ... → это curried function, и вызов f(a) — это шаг каррирования



// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }
//     return (...next) => curried(...args, ...next);
//   };
// }

 