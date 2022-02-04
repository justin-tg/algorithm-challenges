
/* Implement the `countLeaves` function in this Tree class.
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  * Illustration of a tree with three leaves:
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
*/

//Basic tree that stores a value
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

// Tree.prototype.countLeaves = function () {
//   let leaves = 0;
//   let innerFunc = (node) => {
//     // if the node has kids
//     if (node.children.length) {
//       //iterate through the children nodes and invoke each child to the recur func
//       node.children.forEach((eachChild) => {
//         innerFunc(eachChild);
//       });
//     //otherwise if the node doesn't have kids
//     } else {
//       //it's the last of it's kind so add one to leaves count
//       leaves++;
//     }
//   }
//   //invoke innerfunc to the root/head of the tree
//   console.log(this);
//   innerFunc(this.value)
//   return leaves;
// }

Tree.prototype.countLeaves = function () {
  var counter = 0;
  function innerFunc(node) {
    //if the node doesn't have children
    if (node.children.length === 0) {
      //add one to counter
      counter++;
      return;
    }
    node.children.forEach((eachKid) => {
      innerFunc(eachKid);
    })
  };
  //IIFE the innerFunc to the tree instantiation
  innerFunc(this);
  return counter;
};


//TEST SUITE

//You shouldn't need to change anything below here, but feel free to look.


//TREE addchild method
  // * add an immediate child
  // * (wrap values in Tree nodes if they're not already)
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
let root = new Tree();
root.countLeaves(); // 1
console.log('should be 1: ', root.countLeaves());

root.addChild(new Tree());
root.countLeaves(); // still 1
console.log('should be 1: ', root.addChild(new Tree()));

root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
root.countLeaves(); //3
console.log('should be 3: ', root.countLeaves());