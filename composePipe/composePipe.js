'use strict';
/*

Write Compose and Pipe functions

  Step 1: Implement the function Compose:

    Compose should return a function that is the composition of a list of
    functions of arbitrary length

    Each function is called on the return value of the function that follows

    You can view compose as moving right to left through its arguments

    Compose Example:
      var greet = function(name){ return 'hi: ' + name;}
      var exclaim = function(statement) { return statement.toUpperCase() + '!';}
      var welcome = compose(greet, exclaim);
      welcome('phillip'); // 'hi: PHILLIP!'

  Step 2: Implement the function Pipe:

    Pipe composes a series of functions and returns the resulting function

    Each function is called on the return value of the preceding function

    You can view pipe as moving left to right through its arguments

    Pipe Example:
     var add2 = function(number){ return number + 2; }
     var multiplyBy3 = function(number){ return number * 3; }
     pipe(add2, multiplyBy3)(5) // 21
     pipe(add2, multiplyBy3, multiplyBy3)(5) // 63

 */

/*
i: an arbitrary amount of arguments
o: a function that is the composition of a list of dunctions of arbitrary length
c: n/a
e: n/a
*/
const compose = function() {
  //given an argitray amount of functions for args place all arguments into an array
  let args  = Array.prototype.slice.call(arguments);
  //return a func that passes the value through each function in the args lsit from right to left
  return function(val) {
    for (var i = args.length -1; i >= 0; i--) {
      val = args[i](val);
    }
    return val;
  };
};

/*
i: an arbitrary amount of arguments
o: the resulting function
c: n/a
e: n/a
*/
const pipe = (...args) => {
  return val => {
    return args.reduce((memo, fn) => {
      return fn(memo);
    }, val);
  };
};

//TEST SUITE
//Compose Function
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log(`Expect hi: PHILLIP!: `, welcome('phillip')); // 'hi: PHILLIP!'

// Pipe Function
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
console.log(`Expect 21: `, pipe(add2, multiplyBy3)(5)); // 21
console.log(`Expect 63: `, pipe(add2, multiplyBy3, multiplyBy3)(5)); // 63