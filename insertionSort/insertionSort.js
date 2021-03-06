/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. valbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution
// It will transform an array of valbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];
  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }
  return transform;
};

// let insertionSort = function(array) {
//   for (let i = 1; i < array.length; i++) {
//     let val = array[i];
//     let hole = i;
//     while (hole && val < array[hole - 1]) {
//       array[hole] = array[hole - 1];
//       hole -= 1;
//     }
//     array[hole] = val;
//   }
//   return array;
// };

// let insertionSort = function(array) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while(j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j = j - 1;
//     }
//     array[j + 1] = key;
//   }
//   return array;
// };


// let test1 = insertionSort([7, 3, 5, 1, 4]);
// console.log('should be [ 1, 3, 4, 5, 7 ]: ', test1);

// let test2 = insertionSort([94, 27, 4, 35, 11, 90, 9]);
// console.log('should be [4, 9, 11, 27, 35, 90, 94]: ', test2);

// let test3 = insertionSort([[1, 100, 2, 43, 21]));
// console.log('should be [1, 2, 21, 43, 100]: ', test3);

var insertionSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let currentElement = array[i];
    while (j >= 0 && array[j].value > currentElement.value) {
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = currentElement;
  }
  return array;
};

console.log(insertionSort([{value: 2}, {value: 1}, {value: 3}])); // yields [{value: 1}, {value: 2}, {value: 3}]
console.log(insertionSort([{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}])); // [{value: 10}, {value: 5, order: 1}, {value:5, order: 2}]
var array = testingTransform([1, 100, 2, 43, 21]);
insertionSort(array);