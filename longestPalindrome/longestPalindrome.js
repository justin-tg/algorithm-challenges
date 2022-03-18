/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = function(sentence) {
  // split sentence into words
  sentence = sentence.split(' ');
  //if there is only one word in sentence then return empty string
  if (sentence.length < 2) {
    if (isPalindrome(sentence[0])) {
      return sentence[0];
    }
    return '';
  }
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
  let result = paliArr[paliArr.length -1];
  result = (" " + result.trim() + " ");
  return result;
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

// TESTS SUITE
let mySentence1 = "racecar are bad hannah"
let test1 = longestPalindrome(mySentence1);
console.log('Should be racecar: ', typeof test1, test1);

let mySentence2 = "kayak rotator";
let test2 = longestPalindrome(mySentence2);
console.log('Should be rotator: ', typeof test2, test2);

let mySentence3 = "nan noon is redder";
let test3 = longestPalindrome(mySentence3);
console.log('should be redder: ', typeof test3, test3);

let test4 = longestPalindrome('abc');
console.log('type should be a string: ', typeof test4);

let test5 = longestPalindrome('dad');
console.log('type should be string: ', typeof test5, 'should be dad: ', test5);