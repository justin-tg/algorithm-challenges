/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't
*/

const sudokuChecker = (boardStr) => {
  let board = boardStr.split('\n').map((row) => {
    return row.split('').map((digit) => {
      return parseInt(digit);
    });
  });

  function fails(arr) {
    //total of 1+9+8+... = 45
    return arr.length !== 9 ||
    arr.reduce(function(a, b) { return a + b }, 0) !== 45 ||
    arr.indexOf("5") !== arr.lastIndexOf("5");
  }

  for (let row = 0; row < 9; row++) {
    if (fails(board[row])) {
      return 'invalid';
    }
  }

  for (let col = 0; col < 9; col++) {
    if (fails(board.map(function(row) {
      return row[col];
    })))
    return 'invalid';
  }

  for (let col = 0; col < 9; col += 3) {
    for (let row = 0; row < 9; row += 3) {
      let row1 = board[row].splice(0, 3);
      let row2 = board[row + 1].splice(0, 3);
      let row3 = board[row + 2].splice(0, 3)
      if (fails(row1.concat(row2, row3))) {
        return 'invalid';
      }
    }
  }
  return 'solved';
}


//TEST SUITE
let data1 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

let test1 = sudokuChecker(data1);
console.log('expect solved: ', test1);

let data2 = "375814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

let test2 = sudokuChecker(data2);
console.log('expect invalid: ', test2);