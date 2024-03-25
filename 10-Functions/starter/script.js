'use strict';

// const bookings = [];

// // new way of creating defaults
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 method
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// createBooking('LH1234', undefined, 1000);

// const flight = 'LH234';
// const milo = {
//   name: 'Milo Suremen',
//   passport: 249123034541,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

//   if (passenger.passport === 249123034541) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, milo);
// console.log(flight);
// console.log(milo);

// // Is the same as doing ...
// const flightNum = flight;
// const passenger = milo;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };
// newPassport(milo);
// checkIn(flight, milo);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋🏻');
// };

// // high5 is the callback function
// // addEventListener is the higher-order function
// document.body.addEventListener('click', high5);

// ['milo', 'martha', 'adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Milo');
// greeterHey('Steven');

// greet('Hello')('Milo');

// // Challange - my solution:
// const greet2 = (greeting, name) => {
//   console.log(`${greeting} ${name}`);
// };
// greet2('hello2', 'milo2');

// // Challange - lecturer solution:
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hello')('Milo');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // old way learned of adding methods
//   // book: function() {}
//   // new way learned of adding methods
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Milo Sh');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Call Method
// //  Does NOT work
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Milo Sh');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // Same as: addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// // Challange (my solution) :
// const addVAT2 = function (rate) {
//   return function (value) {
//     console.log('addVat2: ', value + value * rate);
//   };
// };

// const value2 = addVAT2(0.23);
// value2(100);
// value2(23);

// // Challange (lecturer solution) :
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT3 = addTaxRate(0.23);
// console.log(addVAT3(100));
// console.log(addVAT3(23));

///////////////////////////////////////
// Coding Challenge #1

// const registerNewAnswer = function () {
//   // prompt(`${poll.question} ${poll.options} (Write option number)`);
//   console.log(`${poll.question} ${options} (Write option number)`);
// };

///////////////////////////////////////
// Coding Challenge #1

// My solution:
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const optionArr = this.options.join('\n');
//     const callback = answer => {
//       const answerIndex =
//         answer !== null && answer.trim() !== '' ? Number(answer) : null;
//       if (
//         answerIndex !== null &&
//         !isNaN(answerIndex) &&
//         answerIndex >= 0 &&
//         answerIndex < this.options.length
//       ) {
//         this.answers[answerIndex]++;
//         displayResults.call(this);
//       } else {
//         console.log(
//           'Please pick a number from 0 to ' + (this.options.length - 1)
//         );
//       }
//     };
//     const answer = prompt(
//       `${this.question}\n${optionArr}\n(Write option number)`
//     );
//     callback(answer);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const displayResults = function () {
//   const type = prompt(
//     ` Display results as a 'string' or 'array'`
//   ).toLowerCase();
//   if (type === 'string') {
//     console.log(`Poll results are: ${this.answers}`);
//   } else if (type === 'array') {
//     console.log('Poll results are:', this.answers);
//   } else {
//     console.log(`please enter either 'string' or 'array'`);
//   }
// };

// testData.bind()

// // Lecturer solution:
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are: ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // BONUS TEST DATA:

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// const runOnce = function() {
//   console.log('This will never run again');
// }
// runOnce();

// // IIFE = immedietly invoked function 
// (function() {
//   console.log('This will never run again');
//   const isPrivate = 23
// })()

// // console.log(isPrivate);

// ;(() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23
//   var notPrivate = 46
// }
// // console.log(isPrivate);
// console.log(notPrivate);

// const secureBooking = function() {
//   let passengerCount = 0

//   return function() {
//     passengerCount++
//     console.log(`${passengerCount} passangers`);
//   }
// }

// const booker =  secureBooking()

// booker()
// booker()
// booker()

// console.dir(booker)

// // Example 1
// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   }
// }

// const h = function() {
//   const b = 777
//   f = function() {
//     console.log(b * 2);
//   }
// }

// g()
// f()
// console.dir(f)

// // Re-assigning f function
// h()
// f()
// console.dir(f)

// // Example 2
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000
// boardPassengers(180, 3)

// // CODING CHALLANGE #2

// (function() {
//   const header = document.querySelector('h1')
//   header.style.color = 'red'

//   document.querySelector('body').addEventListener('click', function() {
//     header.style.color = 'blue'
//   })
// })()
