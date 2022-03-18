// // * Implement a `BFSelect` method on this Tree class
// // * BFSelect accepts a filter function, calls that function on each of the nodes
// // * in Breadth First order, and returns a flat array of node values of the tree
// // * for which the filter returns true

// //Basic tree that stores a value.
// var Tree = function(value) {
//   this.value = value;
//   this.children = [];
// };

// //Your code here...
// //Return array of values which the function filter(value, depth) returns true

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

var Queue = function() {
  this.storage = {};
  this.firstIn = undefined;
  this.index = 0;
};

Queue.prototype.add = function(tree, depth) {
  this.storage[this.index] = {tree: tree, depth: depth + 1};
  if (this.firstIn === undefined) {
    this.firstIn = this.index;
  }
  this.index++;
};

Queue.prototype.leave = function() {
  let leaving = this.storage[this.firstIn];
  delete this.storage[this.firstIn]

  if (this.firstIn < this.index) {
    this.firstIn++
  }
  if (Object.keys(this.storage).length === 0) {
    this.index = 0;
    this.firstIn = undefined;
  }

  return leaving;
};

Tree.prototype.BFSelect = function(filter) {
  // return an array of values for which the function filter(value, depth) returns true
  let passes = [];
  let depth = 0;
  let breadthNodes = new Queue();
  if (filter(this.value, depth)) passes.push(this.value);

  for (let i = 0; i < this.children.length; i++) {
    let child = this.children[i];
    breadthNodes.add(child, depth);
  }

  while (Object.keys(breadthNodes.storage).length !== 0) {
    let dequeing = breadthNodes.leave()
    let tree = dequeing.tree;
    for (let i = 0; i < tree.children.length; i++) {
      let child = tree.children[i];
      breadthNodes.add(child, dequeing.depth);
    }
    if (filter(tree.value, dequeing.depth)) passes.push(tree.value);
  }

  return passes;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

//TEST SUITE
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);


let test1 = root1.BFSelect(function (value, depth) {
  return value % 2;
})
console.log(test1)// [1, 3, 5, 7]

let test2 = root1.BFSelect(function (value, depth) {
  return depth === 1;
})
console.log(test2)// [2, 3]