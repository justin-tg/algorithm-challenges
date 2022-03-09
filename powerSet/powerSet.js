/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  let inputArr = str.split('');
  return inputArr.reduce(
    (subsets, value) => subsets.concat(
     subsets.map(set => [value,...set])
    ),
    [[]]
  );
};

let test1 = powerSet("abc");
console.log('all subsets: ', test1);
console.log('expect length to be 8', test1.length);

let test2 = powerSet("jump");
console.log('all subsets: ', test2);
console.log('expect length to be 16', test2.length);

let test2 = powerSet("spark");
console.log('all subsets: ', test3);
console.log('expect length to be 32', test3.length);