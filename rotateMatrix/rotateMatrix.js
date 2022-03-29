/*
  Write a function that rotates a NxN matrix 90 degrees

Important note:
- In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of *rows* and n is the number of   *columns* So an [i][j] address in a matrix will be i places down, and j places over. This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down

EC:
- Make your function operate on rectangular matrices (MxN rather than NxN).
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
*/

const rotateMatrix = (matrix) => {
  // Copy the original matrix
  var origMatrix = matrix.slice();
  for(var i=0; i < matrix.length; i++) {
      // Map each row entry to its rotated value
      var row = matrix[i].map(function(x, j) {
          var k = (matrix.length - 1) - j;
          return origMatrix[k][i];
      });
      matrix[i] = row;
  }
  return matrix;
};

//TEST SUITE

//TEST1
let arr1 = [[1,2,3,4],[5,6,7,8],[9,'A','B','C'],['D','E','F','G']];
console.log('expect 1: ', arr1[0][0]); // 1
console.log('expect F: ', arr1[3][2]); // F

let test1 = rotateMatrix(arr1); // Rotate 90 degrees clockwise
console.log('expect D: ', test1[0][0]); //D
console.log('expect 8: ', test1[3][2]); //8

let expect1 = [
['D',9,5,1],
['E','A',6,2],
['F','B',7,3],
['G','C',8,4]
];

//TEST2
let arr2 =
[
  ['x', 'z'],
  [6, 7]
];
console.log('expect x: ', arr2[0][0]);

let test2 = rotateMatrix(arr2);
console.log('expect 6: ', test2[0][0]); //6