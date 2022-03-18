// //Bind Function

var bind = function(method, target, ...Args) {
  return (...newArgs) => {
    let args = Args.concat(newArgs);
     return method.apply(target, args);
  }
};

Function.prototype.bind = function(target, ...Args) {
  return (...newArgs) => {
    let args = Args.concat(newArgs);
    return this.apply(target, args);
  }
};

//TEST SUITE for bind() method

// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//     return this.name;
//   }
// }

// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'

// Function.prototype.bind:
// example 1:
// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
// boundShout(); // alerts 'bob'