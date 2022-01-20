/*
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 prompt: make a quick sort function
i: array
o: the pivot inserted into the array in teh right spot
c:
e:  if the array length is 1 or less return the array

 */




var quicksort = function(array) {
  if(array.length <= 1) {
    return array;
  }
  //create a var called pivot and set it equal the last num in the array (now removed)
  var pivot = array.pop();
  //create left (less than) and right (greater than) arrays
  var left = [];
  var right = [];
  var resultArr = [];
  //iterate through the input array starting at index 1
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    //if the number is less than the pivot push to left array
    if (num < pivot) {
      left.push(num);
    //otherwise the num is equal to or greater than pivot so psh right
    } else {
      right.push(num);
    }
  }
  //concatenate all the nums into one result array
  //recursively invoke the left and right array to quicksort with the pivot stored between them until each sub array (and set of sub arrays) is completely sorted
  return resultArr.concat(quicksort(left), pivot, quicksort(right));
};

//TEST SUITE
var test1 = quicksort([1, 9, 4, 8, 6, 3, 5]);
console.log('should be 1, 3, 4, 5, 6, 8, 9', test1);
