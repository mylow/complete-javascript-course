// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log(23);

// const calcAge = birthyear => 2037 - birthyear;

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',

//     // C) FIX
//     // value: prompt('Degrees celsius:'),
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   // B) FIND
//   console.log(measurement);
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A) IDENTIFY
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeNew);

// 1) understanding the problem
// - array transformed to string, seperated by ...
// - what is the X days ? (current index + 1)

// 2) Breaking up into sub-problems
// - transform array into string
// - strings need to contain day ( index + 1 )
// Add ... between elements and start and end of string
// log str to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}C... ${data1[1]}C... ${data1[2]}C... `);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForcast(data1);
printForcast(data2);

// 2+3 = 5 +4 = 9
// [2,3,4]
//
