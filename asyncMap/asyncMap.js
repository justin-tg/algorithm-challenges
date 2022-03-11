'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
*/

// var asyncMap = function(tasks, callback) {
//   let resultsArr = [];
//   //declare result count
//   let count = 0;
//   //iterate over tasks
//   for (var i = 0; i < tasks.length; i++) {
//     //invoke next task with cb function as param
//     (function (index) {
//       tasks[index] (function (val) {
//         //store cb result at correct spot in resultsArr
//         resultsArr[index] = val;
//         //results count plus 1
//         count++;
//         //if count = tasks
//         if (count === tasks.length) {
//           //call callback on results array to end everything
//           callback(resultsArr);
//         }
//       });
//     }) (i);
//   }
// };


const asyncMap = function(tasks, callback) {
  let resultsArr = [];
  let count = 0;
  for (let i = 0; i < tasks.length; i++) {
    tasks[i] (function (val) {
        resultsArr[i] = val;
        count++;
        if (count === tasks.length) {
          callback(resultsArr);
        }
      });
  }
};


//TEST SUITE
asyncMap([
 function(cb){
   setTimeout(function(){
     cb('one');
   }, 200);
 },
 function(cb){
   setTimeout(function(){
     cb('two');
   }, 100);
 }
],
 function(results){
   // the results array will equal ['one','two'] even though
   // the second function had a shorter timeout.
   console.log(results); // ['one', 'two']
});