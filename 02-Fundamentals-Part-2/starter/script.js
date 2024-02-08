"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is milo');
// }

// logger()

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice);

// const num = Number('23')
// console.log(num);

// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991)

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991)

// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

//  console.log(yearsUntilRetirement(1991, 'milo'));
//  console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//  return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, 'milo'));
// console.log(yearsUntilRetirement( 1950, 'Mike'));

// // Challange #1 my solution:

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3
// }

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// // const scoreDolphins = calcAverage(85, 54, 49)
// // const scoreKoalas = calcAverage(23, 34, 27)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     avgDolphins = scoreDolphins
//     avgKoalas = scoreKoalas

//     if (avgDolphins >= avgKoalas*2) {
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
//     } else if (avgKoalas >= avgDolphins*2){
//         console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
//     } else {
//         console.log('No team wins...')
//     }
// }

// checkWinner()

// // Challange #1 UDEMY solution

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3,4,5));

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {

// }

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const firstName = 'milo'
// const milo =  [firstName, 'Sh', 2037 - 1991, 'developer', friends]

// console.log(milo);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter']

// const newLength = friends.push('Jay')
// console.log(friends);
// console.log(newLength);

// friends.unshift('John')
// console.log(friends);

// friends.pop()
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift()
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Thomas'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Thomas'));

// if (friends.includes('steven')) {
//     console.log('you have a friends named Steven');
// }

// const calcTip2 = bill => {
//     bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals);

// // refresh:

// const milowArray = [
//     'milo',
//     'Sh',
//     2023 - 1998,
//     'web dev',
//     [
//         'Michael',
//         'Thomas',
//         'Steven'
//     ],
// ]

// const milo = {
//     firstName: 'milo',
//     lastName: 'sh',
//     age: 2023 - 1998,
//     job: 'web dev',
//     friends: [
//         'Michael',
//         'Thomas',
//         'Steven'
//     ],
// }

// console.log(milowArray);
// console.log(milo);

// // OBJECTS -------------

// Dot vs. Brakcet Notation

// const milo = {
//     firstName: 'milo',
//     lastName: 'sh',
//     age: 2023 - 1998,
//     job: 'web dev',
//     friends: [
//         'Michael',
//         'Thomas',
//         'Steven'
//     ],
// }

// console.log(milo.lastName);
// console.log(milo['lastName']);

// const nameKey = 'Name'
// console.log(milo['first' + nameKey]);
// console.log(milo['last' + nameKey]);

// const interesedIn = prompt('What do you want to know about milo, choose between firstName, lastName, age, job & friends')

// if(milo[interesedIn]) {
//     console.log(milo[interesedIn]);
// } else {
//     console.log('No job found. Please enter one of the job options provided');
// }

// milo.location = 'Seattle'
// milo['linkedIn'] = 'mylow';
// console.log(milo);

// // Challange
// // "Milo has 3 friends, and his best friend is called Michael"

// console.log(`${milo.firstName} has ${milo.friends.length} friends, and his best friend is named ${milo.friends[0]}`);

// const milo = {
//   firstName: "milo",
//   lastName: "sh",
//   birthYear: 1998,
//   job: "web dev",
//   friends: ["Michael", "Thomas", "Steven"],
//   hasDriversLicense: true,

// callAge: function(birthYear) {
//     return 2024 - birthYear
// }

// callAge: function() {
//     // console.log(this);
//     return 2024 - this.birthYear
// }

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

// console.log(milo.calcAge());

// console.log(milo.age);
// console.log(milo.age);
// console.log(milo.age);

// // Challange
// // "milo is a 26-year old web developer, and he has a/no drivers license."

// if (milo.calcAge() > 21 ) {
//     console.log(`${milo.firstName} is a ${milo.age}-year old ${milo.job}, and he has a drivers license`);
// } else {
//     console.log(`${milo.firstName} is a ${milo.age}-year old ${milo.job}, and he has no drivers license`);
// }

// console.log(milo.getSummary());

// // CODING CHALLANGE #3

// // my soluction ::
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// function HigherBMI() {
//   if (john.calcBMI() > mark.calcBMI()) {
//     console.log(
//       `John Smith's BMI (${john.calcBMI()}) is higher than Mark Miller's (${mark.calcBMI()})!`
//     );
//   } else {
//     console.log(
//       `Mark Miller's BMI (${mark.calcBMI()}) is higher than John Smith's (${john.calcBMI()})!`
//     );
//   }
// }

// HigherBMI();

// // video solution

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// // console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi < mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// // For Loops

// console.log("Lifting weights repeition 1 ");
// console.log("Lifting weights repeition 2 ");
// console.log("Lifting weights repeition 3 ");
// console.log("Lifting weights repeition 4 ");
// console.log("Lifting weights repeition 5 ");
// console.log("Lifting weights repeition 6 ");
// console.log("Lifting weights repeition 7 ");
// console.log("Lifting weights repeition 8 ");
// console.log("Lifting weights repeition 9 ");
// console.log("Lifting weights repeition 10 ");

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repeition ${rep}`);
// }

// const milow = [
//   "milo",
//   "Sh",
//   2023 - 1998,
//   "web dev",
//   ["Michael", "Thomas", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < milow.length; i++) {
//   console.log(milow[i], typeof milow[i]);

//   // types[i] = typeof milow[i];
//   types.push(typeof milow[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // Continue & Beak

// console.log("----- ONLY STRINGS -----");
// for (let i = 0; i < milow.length; i++) {
//   if (typeof milow[i] !== "string") continue;

//   console.log(milow[i], typeof milow[i]);
// }

// console.log("----- BREAK WITH NUMBER -----");
// for (let i = 0; i < milow.length; i++) {
//   if (typeof milow[i] === "number") break;

//   console.log(milow[i], typeof milow[i]);
// }

// const milow = [
//   "milo",
//   "Sh",
//   2023 - 1998,
//   "web dev",
//   ["Michael", "Thomas", "Steven"],
//   true,
// ];

// for (let i = milow.length - 1; i >= 0; i--) {
//   console.log(i, milow[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ STARTING EXERCISE ${exercise} ------`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`-- WHILE -- Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end ...");
//   }
// }

/* 

Coding Exercise 6: Challange #2 (( MY VERSION ))

*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
//   console.log(`bill: ${bills[i]}, tip: ${tips[i]}, total: ${totals[i]}`);
// }

/* 

Coding Exercise 6: Challange #2 (( THEIR VERSION ))

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// console.log(bills, tips, totals);

/* 
BONUS : 
*/

const arr = [];

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
