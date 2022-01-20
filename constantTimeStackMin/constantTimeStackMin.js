/*
Prompt: Write a stack using your preferred instantiation pattern
Add: Implement a min function that returns the minimum value of all the elements in the stack
i: there is no input for a constructor function
o:  an object with methods including push/insert, pop/remove, size/length and minValue
c: all functions and methods must have constant time complexity
e: a stack is first in first out (FIFE)
Stack Class
*/

var Stack = function() {
  var result =  Object.create(stackMethods);
  result.top = 0;
  result.minimum = 10000000000000000;
  result.prevMin = 999;
  return result;
};

var stackMethods = {};

// add an item to the top of the stack and inc the top by 1
stackMethods.push = function(value) {
  if (value < this.minimum) {
    this.preMin = this.minimum;
    this.minimum = value;
  }
  this[this.top] = value;
  this.top++;
};

// remove an item from the top of the stack using delete and dec the top by 1 - does pop have a return value
stackMethods.pop = function() {
  //if the value at the top of the stack is the smallest value then set the min value equal to the prev value
  if (this[this.top] === this.minimum) {
    console.log('here')
    this.minimum = this.prevMin;
  }
  delete this[this.top];
  //top minus 1
  this.top--;
  //return the now current value at the top of the stack
  return this[this.top];
};

// return the number of items in the stack
stackMethods.size = function() {
  if (this.top <= 0) {
    return 0;
  }
  return this.top;
};

// return the minimum value in the stack
stackMethods.min = function() {
  var numsArr = Object.values(stack);
  for (var num of numsArr) {
    if (this.min < num) {
      return this.min
    }
  }
};

//TEST SUITE
var test1 = new Stack();
test1.push(4);
test1.push(3);
console.log('test 1 using push - min should be 3: ', test1.min());
console.log('test 1 size should be 2', test1.size());

var test2 = new Stack();
test2.push(3);
test2.push(10);
test2.push(5);
test2.push(2);
test2.push(1);
test2.pop();
test2.push(2);
test2.pop();
console.log('test 2 using push&pop - min should be min 2: ', test2.min());
console.log('test2 size should be 4: ', test2.size());

var test3 = new Stack();
test3.push(10);
test3.push(5);
test3.pop();
test3.push(6);
test3.push(8);
console.log('test 3 using pop should be 6: ', test3.min());
console.log('test 3 using pop - size should be 3', test3.size());


//working on: figure out how to change the min value to point to the right value given constant time complexity when the min value is removed from the top of the stack

//FAILING 2 TESTS
// Stack constructor should return an instance of a stack
// AssertionError: expected { Object (top, minimum, ...) } to be an instance of Stack
var stack = new Stack(); // aka, `stack instanceof Stack` is returning false, but it should be true!
// stack.should.be.an.instanceOf(Stack);

// Stack #min should return the min of all the elements in the stack
// AssertionError: expected 100 to equal 200
var stack = new Stack();
stack.push(200); // we just added an element so the stack's min should be 200
console.log('should be 200', stack.min());//.should.be.equal(200);
// stack.min().should.be.equal(200);

stack.push(100); // we just added _another_ element and the stack's min should now be 100
console.log('should be 100', stack.min());//should.be.equal(100);

stack.pop(); // we just removed 100 element so the stack's min should be 200 again
console.log('should be 200', stack.min());//.should.be.equal(200);

stack.push(50);
stack.push(50); // we just added _another_ element and the stack's min should now be 50

console.log('should be 50', stack.min());//.should.be.equal(50); even if we pop the lowest value, the stack should remember duplicates

stack.pop();
console.log('should be 50', stack.min());//.should.be.equal(50);