'use strict';

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, borth in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // Creating NEW variable with same name as outer scope's variable
//       console.log(output);

//       // Reassigning outer scope's variables
//       output = ' NEW OUTPUT!';

//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//     }
//     // console.log(str); // will error out
//     // console.log(add(2, 3)); // will not work in sloppy mode (not strict mode)

//     console.log(millenial); // will work (if millenial)
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Milo';
// calcAge(1996);

// hoisting with variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Milo';
// let job = 'SWE';
// const year = 1998;

// // hoisting with functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   //   console.log(this);
// };
// calcAge(1998);

// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(1996);

// const milo = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// milo.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = milo.calcAge;

// matilda.calcAge();

// const f = milo.calcAge;
// f();

// var firstName = 'Matilda';

// const milo = {
//   firstName: 'Milo',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1

//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2
//     const self = this; // self or that
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// milo.greet();
// milo.calcAge();

// // Arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Milo',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {} // does not work because using const above

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // This creates a 'shallow copy' copies only the first level
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('jessica2 before: ', jessica2);
console.log('jessicaCopy (after) : ', jessicaCopy);
