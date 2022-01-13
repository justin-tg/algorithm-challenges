/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/



var evenOccurrence = function(arr) {
  var myObj = {};
  arr.forEach(function(item) {
    if (myObj[item] !== undefined) {
      myObj[item] = myObj[item] + 1;
    } else {
      myObj[item] = 1;
    }
  });
  for (var key in myObj) {
    if (myObj[key] === 2) {
      return key;
    }
  }
};


//TEST SUITE
var onlyEven = evenOccurrence([1, 7, 2, 4, 7, 5, 6, 8, 9, 6, 4]);
console.log('should return 4: ', onlyEven); //  4