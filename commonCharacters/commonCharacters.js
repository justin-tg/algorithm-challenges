/*
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!

 * Extra credit: Extend your function to handle more than two input strings.

i: two strings as argunments
o: string containing chars used in both strings (no duplicates!, and in order)
c:
e: do not include spaces, or repeated chars
*/

// const commonCharacters = function(one, two) {
//   //store each string as an array of seperated letters
//   let arrayOne = one.split('');
//   let arrayTwo = two.split('');

//   //create an object for each string where the key is teh letter and the prop is the appearance count
//   let objOne = {};
//   //iterate over the letters array to create obj
//   arrayOne.forEach(letter => {
//     //if the obj at the letter exists then add one to the count
//     if (objOne[letter]) {
//       objOne[letter] = objOne[letter] + 1;
//     //otherwise the key/value doesn't exist to create and set to count of 1
//     } else {
//       objOne[letter] = 1;
//     }
//   });

//   console.log('objOne: ', objOne);

//   return arrayOne.reduce(function(soFar, letter) {
//     if (objOne[letter] === 2) {
//       soFar += letter;
//       objOne[letter] = objOne[letter] - 1;
//     }
//     return soFar;
//   }, '');

// };

const commonCharacters = function(string1, string2) {
  let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
    }
  }
  return duplicateCharacter.replace(/\s/g, '');
};

//TEST SUITE
let test1 = commonCharacters('acexivou', 'aegihobu')
console.log(`Expect aeiou:`, test1);

let test2 = commonCharacters('aaa', 'abca')
console.log(`Expect a: `, test2);

let test3 = commonCharacters('fra ction', 'tracti on')
console.log(`Expect raction:`, test3);