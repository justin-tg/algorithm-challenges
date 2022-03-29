/*
  Write a function that accepts a 2-dimensional array (that is, an array containing many     same-length arrays) and prints out every value found, but in a spiral from the upper       left in to the center

  Write some form of specs, tests, or assertions for your code, and check as many edge       cases as you can think of

 */

  var spiralTraversal = function(matrix){
    var results =[];
    var startRowIndex = 0;
    var endRowIndex = matrix.length-1;
    var startColIndex = 0;
    var endColIndex = matrix[0].length - 1;

    while(startRowIndex <= endRowIndex && startColIndex <= endColIndex){

      for(var i = startColIndex; i <= endColIndex; i++){
        results.push(matrix[startRowIndex][i]);
      }
      startRowIndex++;

      for(var j = startRowIndex; j <= endRowIndex; j++){
        results.push(matrix[j][endColIndex]);
      }
      endColIndex--;

      for(var k = endColIndex; k >= startColIndex; k--){
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;

      for(var m = endRowIndex; m >= startRowIndex; m--){
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }

    return results;
  }

  //TEST SUITE
  let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
  test1 = spiralTraversal(arr1); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
  console.log('expect [1, 2, 3, 6, 9, 8, 7, 4, 5]: ', test1);