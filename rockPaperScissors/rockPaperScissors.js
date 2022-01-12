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
c: 
e:
justification: the purpose of the function is to generate a list of all possibilities that could happen in a game of n rounds
explaination: the input is an integer or nothing and the output is array containing elements of all possible RPS throw combinations
visualization: created a visual on miro.com
approximation: iterate through the array three seperate times (terrible time complexity) and push all possible combinations into a set
verification:
implementation: with three loops I was able to get 20 out of the 27 possible combinations, and my function was missing all double S combinations (which was the last loop in the iteration chain)
*/


var rockPaperScissors = function () {
  //create an empty string var
  var combo1, combo2, combo3, combo4;
  //create an RPS array
  var rpsArray = ['R', 'P', 'S'];
  var srpArray = ['S', 'R', 'P'];
  //create an empty result array
  var resultArr = [];
  //iterate through the RPS array with a for loop [i] 
  for (var i = 0; i < rpsArray.length - 1; i++) {
    //iterate through the RPS array with a for loop [j] 
    for (var j = 0 ; j < rpsArray.length - 1; j++) {
      //iterate through the RPS array with a for loop [k]
      for (var k = 0; k < rpsArray.length; k++) {
      //concat the array at i plus the array at j plus the array at k into the result array
      combo1 = `${rpsArray[i]}` + `${rpsArray[j]}` + `${rpsArray[k]}`;
      resultArr.push(combo1);
      combo2 = `${rpsArray[j]}` + `${rpsArray[k]}` + `${rpsArray[i]}`;
      resultArr.push(combo2);
      combo3 = `${rpsArray[k]}` + `${rpsArray[i]}` + `${rpsArray[j]}`;
      resultArr.push(combo3);
      }
    }
  }
  for (var i = 0; i < srpArray.length - 1; i++) {
    //iterate through the RPS array with a for loop [j] 
    for (var j = 0 ; j < srpArray.length - 1; j++) {
      //iterate through the RPS array with a for loop [k]
      for (var k = 0; k < srpArray.length; k++) {
      //concat the array at i plus the array at j plus the array at k into the result array
      combo1 = `${srpArray[i]}` + `${srpArray[j]}` + `${srpArray[k]}`;
      resultArr.push(combo1);
      combo2 = `${srpArray[j]}` + `${srpArray[k]}` + `${srpArray[i]}`;
      resultArr.push(combo2);
      combo3 = `${srpArray[k]}` + `${srpArray[i]}` + `${srpArray[j]}`;
      resultArr.push(combo3);
      }
    }
  }
  // console.log(resultArr);
  return new Set(resultArr);
};

//TEST SUITE
console.log('function invokation: ', rockPaperScissors());
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