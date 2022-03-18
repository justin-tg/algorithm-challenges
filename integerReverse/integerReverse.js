/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  let revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

let test1 = reverseInteger(145);
console.log('expect 541: ', test1);

let test2 = reverseInteger(2347162432);
console.log('expect: 2342617432: ', test2);