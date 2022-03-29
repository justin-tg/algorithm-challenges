/*
Write a function that takes a decimalber as its argument and

returns a string that represents that decimalber's simplified fraction

Whole decimalbers and mixed fractions should be returned as irregular fractions
*/

// const toFraction = (decimal) => {
//   // This is a whole decimalber and doesn't need modification.
//   if ( parseFloat( decimal ) === parseInt( decimal ) ) {
//     return decimal;
//   }
//   // Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
//   var gcd = function(a, b) {
//     if (b < 0.0000001) {
//       return a;
//     }
//     return gcd(b, Math.floor(a % b));
//   };
//   var len = decimal.toString().length - 2;
//   var denominator = Math.pow(10, len);
//   var decimalerator = decimal * denominator;
//   var divisor = gcd(decimalerator, denominator);
//   decimalerator /= divisor;
//   denominator /= divisor;
//   var base = 0;
//   // In a scenario like 3/2, convert to 1 1/2
//   // by pulling out the base decimalber and reducing the decimalerator.
//   if ( decimalerator > denominator ) {
//     base = Math.floor( decimalerator / denominator );
//     decimalerator -= base * denominator;
//   }
//   decimal = Math.floor(decimalerator) + '/' + Math.floor(denominator);
//   if ( base ) {
//     decimal = base + ' ' + decimal;
//   }
//   return decimal;
// };

// const toFraction = (decimal) => {
//   let demoninator = 1;
//   if (decimal < 0) {
//     let result = toFraction(decimal * -1);
//     return `- ${result}`;
//   } else {
//     while (decimal % 1 !== 0) {
//       decimal = decimal*10;
//       denominator = denominator*10;
//     }
//   }
//   let gcd = 1;
//   for (let i = decimal; i > 0; i--) {
//     if (decimal % i === 0 && denominator % i === 0) {
//       gcd = 1;
//       break;
//     }
//   }
//   return `${decimal/gcd} + '/' ${denominator/gcd}`;
// }


var toFraction = function(number) {
  let i = 1;
  while (i <= 1000000) {
    let x = number * i;
    if (x % 1 === 0) {
      return `${x}/${i}`;
    }
    i++;
  }
  return '';
};

//TEST SUITE
let test1 = toFraction(3.0); // '3/1'
console.log('expect 3/1: ', test1);

let test2 = toFraction(2.5); //'5/2'
console.log('expect 5/2: ', test2);

let test3 = toFraction(0.5); //'1/2'
console.log('expect 1/2: ', test3);
