/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  //BASE CASE
  if (!typeof string === 'string' || !string) {
    return null;
  } else if (string.length < 2) {
    return string;
  }
  //RECURSIVE CASE
  var resultArr = [];
  for (let i = 0; i < string.length; i++) {
    var letter = string[i];
    var remainingLets = string.slice(0, i) + string.slice(i + 1, string.length);
    //recurse through
    for (let combo of allAnagrams(remainingLets)) {
      resultArr.push(letter + combo)
    }
  }
  return resultArr;
};

//TEST SUITE
var test1 = allAnagrams('abc');
console.log(`should be: ${[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]}: `, test1);

var test2 = allAnagrams('justin');
console.log(test2);

var test3 = allAnagrams('aabc');
console.log(test3);