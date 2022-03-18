/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// Skeleton

/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


const findLongestPalindrome = function(sentence) {
  // split sentence into words
  sentence = sentence.split(' ');
  // iterate words and collect the palindromes
  let paliArr = [];
  for (let i = 0; i < sentence.length; i++) {
  if (isPalindrome(sentence[i]) === true) {
    paliArr.push(sentence[i]);
  }
  // sort the list of palindromes by word length
  }
  paliArr = paliArr.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  return paliArr[paliArr.length -1];
}

function reverseString(string) {
  let reverseString = '';
  reverseString += string.split('').reverse().join('');
  return reverseString;
}

function isPalindrome(word) {
  let isItAPalindrome = true;
  let reverseS = reverseString(word);
    if (reverseS !== word) {
    isItAPalindrome = false;
    }
    return isItAPalindrome;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// TESTS CASES
let mySentence1 = "racecar are bad hannah"
let test1 = findLongestPalindrome(mySentence1);
console.log('Should be racecar: ', test1);

let mySentence2 = "kayak rotator";
let test2 = findLongestPalindrome(mySentence2);
console.log('Should be rotator: ', test2);