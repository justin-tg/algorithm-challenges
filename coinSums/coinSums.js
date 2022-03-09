/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
Prompt: How many different ways can £2 be made using any number of coins?
I: takes in a number
o: returns a number of all possible combinations of coins that can sum to that number
c:
e: input is 0 or negative
explanation: the input is an amount in p (cents) and the output is a whole num of all possible coin combinations
approximation: recursion tree
vis: miro
impl:
*/


var makeChange = function(total) {
  const coins = [1,2,5,10,20,50,100,200];
  //count the number of valid coin combinations
  let counter = 0;
  // coins.sort(/*callback*/);
  let recurse = (index, remainder) => {
    var coin = coins[index];
    //base case
    if (index === 0) {
      //if the remainder divides evenly by the coin
      if (remainder % coin === 0) {
        //valid solution, add 1 to count
        counter++;
      }
      return;
    }
    //recursive case
    //while there is still value unacounted for recurse through other possible coin combinations
    while (remainder >= 0) {
      //invoke the recursive function to the next coin and the remainder
      recurse(index-1, remainder);
      //decriment the remainder by the value of the coin
      remainder -= coin;
    }
  }
  recurse(coins.length-1, total);
  return counter;
};

//TEST SUITE
var test1 = makeChange(1);
console.log('should be 1: ', test1);

var test2 = makeChange(2);
console.log('should be 2: ', 2);

var test3 = makeChange(3);
console.log('should be ??: ', test3);

var test10;