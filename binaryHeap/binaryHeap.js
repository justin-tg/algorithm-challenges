function BinaryHeap (sort) {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = sort || function (i, j) { return i < j };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  let index = this._heap.length - 1; // starting index of incoming value
  let parentIndex = Math.floor( (index - 1) / 2);

  while (index > 0 && this._compare(this._heap[index], this._heap[parentIndex])) {
    // Perform swap
    let holder = this._heap[parentIndex];
    this._heap[parentIndex] = this._heap[index];
    this._heap[index] = holder;
    // Update indices
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
}

BinaryHeap.prototype.removeRoot = function () {
  debugger;
  let finalIndex = this._heap.length - 1;
  // Swap root and final node
  let holder = this._heap[finalIndex];
  this._heap[finalIndex] = this._heap[0];
  this._heap[0] = holder;
  // remove final node (root)
  const oldRoot = this._heap.pop();

  // adjust new 'root' down heap
  let index = 0; // starting index of shifted root
  let childrenIndices = [index * 2 + 1, index * 2 + 2]
  while (childrenIndices[0] < this._heap.length) {
    if (!this._compare(this._heap[index], this._heap[childrenIndices[0]]) && childrenIndices[0] < this._heap.length) {
      swapWithChild(index, childrenIndices[0], this._heap)
    }
    if (!this._compare(this._heap[index], this._heap[childrenIndices[1]]) && childrenIndices[1] < this._heap.length) {
      swapWithChild(index, childrenIndices[1], this._heap)
    }
    index = childrenIndices[0];
    childrenIndices = [index * 2 + 1, index * 2 + 2];
  }
  return oldRoot;
}

const swapWithChild = (index, childIndex, array) => {
  let holder = array[childIndex];
  array[childIndex] = array[index];
  array[index] = holder;
};

//TEST SUITE
