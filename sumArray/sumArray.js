/*
  Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
  A single array item will count as a contiguous sum.
 */

// Solved in O(n) time with O(1) memory
const sumArray = function(array) {
  let currentSum = 0
  let largestSum = 0

  for (let number of array){
      currentSum = Math.max(0, (currentSum + number))
      largestSum = Math.max(largestSum, currentSum)
  }
  return largestSum
};

//TEST SUITE
let test1 = sumArray([1, 2, 3]); // => 6
console.log('expect 6: ', test1);

let test2 = sumArray([1, 2, 3, -4]); // 6
console.log('expect 6: ', test2);

let test3 = sumArray([1, 2, 3, -4, 5]); // 7
console.log('expect 7: ', test3);

let test4 = sumArray([4, -1, 5]); // => 8
console.log('expect 8: ', test4);

let test5 = sumArray([10, -11, 11]); // 11
console.log('expect 11: ', test5);
