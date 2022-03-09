//-------------------------NOT DONE 0/0-------------------------//

/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
prompt: write a function evenOccurrence given a input array that returns the first item in the array that occurs an even amount of times
i: array of numbers
o:  a number
c: handle multiple even-occurrence items and return the first one
e: input is not an array, an empty arr or no even occurances return null
purpose: find the first number in a list of numbers that occurs an even amount of times (and is the lowest number?)
relation i to o: input is an array output is one of the elements of the array
visual: miro
steps: refer to pseudocode
implementation: refer to code
*/

var evenOccurrence = function(arr) {
  //if the input isnt an array return null
  if (!Array.isArray(arr)) {
    return null;
  }
  //create an object to add each array element to with a corresponding value for its occurrences
  var myObj = {};
  var orderToCheck = [];
  //iterate through the input array
  arr.forEach(function(item) {
    //if the current number is already in the obj then add one to its value property
    if (myObj[item] !== undefined) {
      myObj[item] = myObj[item] + 1;
    //otherwise the current number hasn't occured yet, so set its value equal to 1
    } else {
      myObj[item] = 1;
      orderToCheck.push(item);
    }
  });
  //iterate through the orderToCheck array
  for (var order of orderToCheck) {
    //if the current number's property is cleanly divisible by 2
    if (myObj[order] % 2 === 0) {
      //that number has even occurances so return that key (number)

      return order;
    }
  }
  //if none of the numbers had even occurances then return
  return null;
};


//TEST SUITE
var test1 = [1, 7, 2, 4, 7, 5, 6, 8, 9, 6, 4];
console.log('test 1 should return 4: ', evenOccurrence(test1)); //  4

var test2 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 5];
console.log('test 2 should return 5: ', evenOccurrence(test2));

var test3 = [1, 7, 4, 7, 4, 6, 1];
console.log('test 3 should return 1: ', evenOccurrence(test3));

var test4 = [1, 2, 2, 4, 5, 6, 7, 8, 4, 4, 2, 3, 2];
console.log('test 4 should return 2: ', evenOccurrence(test4));

var test5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('test 5 should return null no even occurrences: ', evenOccurrence(test5));

var test6 = [];
console.log('test 6 should return null empty input arr: ', evenOccurrence(test6));

var test7 = 10;
console.log('test 7 should return null invalid input type: ', evenOccurrence(test7));

//FAILING (2) TESTS
// evenOccurrence should return the first even occurrence of a mixed array
// AssertionError: expected '1' to equal 'meow'
var test8 = ['meow', 1, 1, 'meow', 'meow', 'meow'];
console.log('test 8 should return meow: ', evenOccurrence(test8));

//evenOccurrence should return the first even occurrence of an array of numbers
// AssertionError: expected '2' to equal 2
var test9 = [1, 3, 3, 3, 2, 4, 4, 2, 5];
console.log('test 9 should return 2: ', typeof evenOccurrence(test9));

//'<%- username %>'
//renders the char as a string without running the script
//use underscore escape function here https://www.geeksforgeeks.org/underscore-js-_-escape-function/