// //Bind Function
// const bind = (func, context) => {
//   let prevArgs = Array.prototype.slice.call(arguments, 2);

//   return function () {
//     let args = Array.prototype.slice.call(arguments);
//     args  = prevArgs.concat(args);
//     return func.apply(context, args);
//   }
// };

// //Bind Func TEST SUIT
// // function bind():
// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }

// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true


// //Inheritable Functional Bind Method
// Function.prototype.bind = function(context) {
//   let prevArgs = Array.prototype.slice(arguments, 1);
//   let func = this;

//   return function () {
//     let args = Array.prototype.slice.call(arguments);
//     args  = prevArgs.concat(args);
//     return func.apply(context, args);
//   }
// };

// // var boundShout = alice.shout.bind(alice);
// // boundShout(); // alerts 'alice'
// // boundShout = alice.shout.bind({name: 'bob'});
// // boundShout(); // alerts 'bob'

// // var func = function(a, b){ return a + b };
// // var boundFunc = func.bind(null, 'foo');
// // var result = boundFunc('bar');
// // result === 'foobar'; // true

var bind = function(func, obj) {
  return function() {
    return func.apply(obj, arguments);
  };
};

Function.prototype.bind = function(obj, ...args) {
  let func = this;

  return function(...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};