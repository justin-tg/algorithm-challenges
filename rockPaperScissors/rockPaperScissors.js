/*
Write a function that generates every sequence of throws a single player could throw over a three-round game of rock-paper-scissors

* Your output should look like an array of all possible combinations:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]

* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]

Speficication:
i: a number
o:  an array containing elements of all possible RPS throw combinations
c: must return an array (not a set), and its elements must be strings
e: input is 1 then return the rps array, if the input 0 then return empty array
justification: the purpose of the function is to generate a list of all possibilities that could happen in a game of n rounds
explaination: the input is an integer or nothing and the output is array containing elements of all possible RPS throw combinations
visualization: created a visual on miro.com
approximation: iterate through the array three seperate times (terrible time complexity) and push all possible combinations into a set
verification:
implementation: with three loops I was able to get 20 out of the 27 possible combinations, and my function was missing all double S combinations (which was the last loop in the iteration chain)
*/


// var rockPaperScissors = function (number) {
//   //create an RPS and SRP array
//   var rpsArray = ['R', 'P', 'S'];
//   var srpArray = ['S', 'R', 'P'];
//   //Edge Cases
//   if (number === 1) {
//     return rpsArray;
//   } else if (number <= 0) {
//     return [];
//   }
//   //create an empty result array
//   var pushArray = [];
//   //iterate through the RPS array with a for loop [i]
//   for (var i = 0; i < rpsArray.length - 1; i++) {
//     var r = rpsArray[i];
//     //iterate through the RPS array with a for loop [j]
//     for (var j = 0 ; j < rpsArray.length - 1; j++) {
//       var p = rpsArray[j];
//       //iterate through the RPS array with a for loop [k]
//       for (var k = 0; k < rpsArray.length; k++) {
//         var s = rpsArray[k];
//       //concat the array at i plus the array at j plus the array at k into the result array
//       pushArray.push(r + p + s);
//       pushArray.push(p + s + r);
//       pushArray.push(s + r + p);
//       }
//     }
//   }
//   for (var i = 0; i < srpArray.length - 1; i++) {
//     var r = srpArray[i];
//     //iterate through the RPS array with a for loop [j]
//     for (var j = 0 ; j < srpArray.length - 1; j++) {
//       var p = srpArray[j];
//       //iterate through the RPS array with a for loop [k]
//       for (var k = 0; k < srpArray.length; k++) {
//         var s = srpArray[k];
//       //concat the array at i plus the array at j plus the array at k into the result array
//       pushArray.push(r + p + s);
//       pushArray.push(p + s + r);
//       pushArray.push(s + r + p);
//       }
//     }
//   }
//   // console.log(resultArr);
//   var mySet = new Set(pushArray);
//   var array = Array.from(mySet);
//   return array;
// };

var rockPaperScissors = function (rounds) {
  var rounds = rounds || 3;
  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar =  playedSoFar || '';
    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }

    ['R', 'P', 'S'].forEach(function myFunc(currentPlay) {
      playRounds(playedSoFar + currentPlay);
    });
  };

  playRounds();
  return combos;
};

rockPaperScissors(3)

//TEST SUITE
console.log(rockPaperScissors());
/*
0: "RRR"
1: "RRP"
2: "RPR"
3: "PRR"
4: "RRS"
5: "RSR"
6: "SRR"
7: "RPP"
8: "PPR"
9: "PRP"
10: "RPS"
11: "PSR"
12: "SRP"
13: "SPR"
14: "PRS"
15: "RSP"
16: "PPP"
17: "PPS"
18: "PSP"
19: "SPP"

missing all the double S's: 'SSS', 'SSR', 'SSP', 'SPS', 'SRS', 'PSS', 'RSS'

//after adding another chain of loops with S as the first loop

0: "RRR"
1: "RRP"
2: "RPR"
3: "PRR"
4: "RRS"
5: "RSR"
6: "SRR"
7: "RPP"
8: "PPR"
9: "PRP"
10: "RPS"
11: "PSR"
12: "SRP"
13: "PRS"
14: "RSP"
15: "SPR"
16: "PPP"
17: "PPS"
18: "PSP"
19: "SPP"
20: "SSS"
21: "SSR"
22: "SRS"
23: "RSS"
24: "SSP"
25: "SPS"
26: "PSS"

assignment complete ... ish
*/