/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(apple, orange) {
  //if the two input params are identical return true
  if (apple === orange) {
    return true;
  }
  //if either of the input params are undefiend return false
  if (orange === undefined || apple === undefined) {
    return false;
  }
  //if either of the input params are not an obj return false
  if (!(typeof apple === 'object') || !(typeof orange === 'object')) {
    return false;
  }
  //create variables for the keys of each input obj
  let appleKeys = Object.keys(apple);
  let orangeKeys = Object.keys(orange);
  //if the input params keys length are not the same return false
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  //if the firs tinput obj keys is 0 then there are no keys return true
  if (appleKeys.length === 0) {
    return true;
  }
  //iteraate over the apple keys and recursively invoke deepEquals to each subsequent element
  for (let key in apple) {
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    }
  }
  //if you get this far return true
  return true;
};

let test1Obj = {a:1, b: {c:3}};
let test1 = deepEquals(test1Obj, test1Obj);
console.log('expect to see true: ', test1); // true

let test2ObjA = {a:1, b: {c:5}};
let test2ObjB = {a:1, b: {c:6}};
let test2 = deepEquals(test2ObjA, test2ObjB);
console.log('expect to see false: ', test2); // false