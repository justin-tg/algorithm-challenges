/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  const sorted = array.slice().sort(function(a,b) {
      return a - b;
  });

  let n = sorted.length;
  let firstProduct = sorted[0] * sorted[1] * sorted[n - 1];
  let lastProduct = sorted[n - 3] * sorted[n - 2] * sorted[n - 1];

  return Math.max(firstProduct, lastProduct);
};