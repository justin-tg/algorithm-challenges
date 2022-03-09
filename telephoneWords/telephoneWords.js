/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!

  * Write a function that takes up to four digits of a phone number, and
   returns a list of all of the words that can be written on the phone with
  that number. (You should return all permutations, not only English words.)

  Phone numbers are strings! (A phone number can start with a zero.)
  The digits 0 and 1 do not have letters associated with them, so they should be left as numbers
  Don't return every combination of those digits in any order, just the order given.

  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  Filter your results to only return words contained in that file?
  */

  var phoneDigitsToLetters = {
    '0': '0',
    '1': '1',
    '2': 'ABC',
    '3': 'DEF',
    '4': 'GHI',
    '5': 'JKL',
    '6': 'MNO',
    '7': 'PQRS',
    '8': 'TUV',
    '9': 'WXYZ'
  };


/*
pormpt: find every combination that can be spelled on a phone with these digits
i: a string of 4 numbers
o: an array containing every combination of letters for the given numbers
c:
e: empty input, non string input, input length variations
approximation: for each given number it could exist as 3 or 4 possible letters, so iterate through every possible combiation
visualization: miro

*/
// var telephoneWords = function(digitString) {
//   var inputArr = digitString.split('');
//   console.log(inputArr);

//   //RESULT VARS
//   var resultArr = [];
//   var resultStr = '';

//   var innerFunc = function(returnStr, numArr) {
//     if (returnStr.length === digitString.length) {
//       return returnStr;
//     } else {
//       var lettersArr;
//       //if the current number is between 2-9
//       if (numArr[0] > 1 && numArr[0] < 10) {
//         //set lettersArr for given num to its possible letters
//         lettersArr = phoneDigitsToLetters[numArr[0]].split('');
//         console.log(`the possible letters for  ${numArr[0]}:  ${lettersArr}`);

//         for (var i = 0; i < lettersArr.length; i++) {
//           //add the first letter of 2's letters array to the result str
//           returnStr += lettersArr[i];
//           //reinvoke the numbers array with the first number popped off
//           numArr.shift();
//           innerFunc(returnStr, numArr);
//         }
//       }
//     }
//   };//end of innerFunc
//   innerFunc(resultStr, inputArr);
//   console.log('here: ', resultStr);
//   return resultStr;
// };

var telephoneWords = function(digitString) {
  if (digitString === '') {
    return [];
  }

  let combos = [];
  //iterate through every digit
  for (let i = digitString.length - 1; i >= 0; i--) {
    const num = digitString[i];
    if (combos.length === 0) {
      combos = [...phoneDigitsToLetters[num].split('')];
    } else {
      const newArray = [];
      for (let j of phoneDigitsToLetters[num].split('')) {
          for (let k of combos){
              newArray.push(j + k);
          }
      }
      combos = newArray;
    }
  }
  return combos;
}

//TEST SUITE
var test1 = '2745'
console.log('first test should be APGJ: ', telephoneWords(test1))

//  => ['APGJ',
// 'APGK',
// 'APGL',
// ..., // many many more of these
// 'CSIL']

var test2;