/*
Prompt: Write a stack using your preferred instantiation pattern
Add: Implement a min function that returns the minimum value of all the elements in the stack
i: there is no input for a constructor function
o:  an object with methods including push/insert, pop/remove, size/length and minValue
c: all functions and methods must have constant time complexity
e: a stack is first in first out (FIFE)

Stack Class
*/

stackMethods = {};
var Stack = function() {
  var result =  Object.create(stackMethods);
  result.top = 0;
  result.min = 10000000000000000;
  result.prevMin = 999999999999999;
  return result;
};

var result = {};

// add an item to the top of the stack and inc the top by 1
result.push = function(value) {
  if (value < this.min) {
    this.preMin = this.min;
    this.min = value;
  }
  this[this.top] = value;
  this.top++;
};

// remove an item from the top of the stack using delete and dec the top by 1 - does pop have a return value
result.pop = function() {
  //if the value at the top of the stack is the smallest value then set the min value equal to the prev value
  if (this[this.top] === this.min) {
    this.min = this.prevMin;
  }
  delete this[this.top];
  //top minus 1
  this.top--;
  //return the now current value at the top of the stack
  return this[this.top];
};

// return the number of items in the stack
result.size = function() {
  if (this.top <= 0) {
    return 0;
  }
  return this.top;
};

// return the minimum value in the stack
result.min = function() {
  if (this.min !== undefined) {
    return this.min;
  }
  return this.prevMin;
};

//TEST SUITE
var test1 = new Stack()
test1.push(4)
test1.push(3)
test1.min() === 3
console.log('test 1 using push/min should return 3: ', test1.min());
console.log('test 1 size method should be 2', test1.size());

var test2 = new Stack();
test2.push(3);
test2.push(2);
test2.push(2);
console.log('test 2 using push/min should return 2: ', test2.min());

var test3 = new Stack();
test3.push(10);
test3.push(5);
test3.pop(5);
test3.push(6);
test3.push(8);
console.log('test 3 using pop should return 6: ', test3.min());
console.log('test 3 size method should be 3', test3.size());
