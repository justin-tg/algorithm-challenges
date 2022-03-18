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
  let reverse = 0;
  let lastDigit = 0;
  while (number !== 0) {
    lastDigit = number % 10;
    number = parseInt(number / 10);
    reverse = reverse * 10 + lastDigit;
    if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return reverse;
}

let test1 = reverseInteger(145);
console.log('expect 541: ', test1);