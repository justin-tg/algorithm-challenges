/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// Below is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
//hashTable already built
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
prompt: write out the insert, remove, retrieve, and stoarge resizer functions as methods for the result object being created in the constructor function below
i: no input
o: output a properly built hashtable
c: hashTable function is already built, but do need to build sotorage resizer function
e: not worrrying about non-string inputs, and not using the keyword 'this' for the instantiation method used below
explaination: build a hashtable that works properly
visualization: refer to miro
approximation: refer to pseudocode
impementation: refer to code
*/

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value) {
    // TODO: implement `insert`
    //if you add then add one to the size
    size++;
    var index = getIndexBelowMaxForKey(key, storageLimit)
    var bucket = storage[index];
    //if the bucket contains content
    if (bucket) {
      //iterate through each tupel array in the bucket
      for (var tupel of bucket) {
        //if the input key matches the 0 indexed item in the bucket
        if (tupel[0] === tupel) {
          //return the pair value property at index 1
          tupel[1] = value;
        }
      } //finish iterating through entire bucket
      //if the key wasn't found then the key value pair is not in the bucket so push to insert it
      bucket.push([key, value]);
    //otherwise the bucket is empty or nothing
    } else {
      //the storage[index] is an empty array
      //push the given key value pair in an array into the bucket
      storage[index].push([key, value]);
    }
    //double the storage limit as soon as the total number of items stored is greater than 3/4th of the number of slots in the storage array
    if (size / storageLimit >= 0.75) {
      storageResizer(storageLimit * 2);
    }

  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(key, storageLimit)
    var bucket = storage[index];
    if (bucket) {
      for (var tupel of bucket) {
        //if the input key matches the 0 indexed item in the bucket
        if (tupel[0] === tupel) {
          //return the pair value property at index 1
          return tupel[1];
        }
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit)
    var bucket = storage[index];
    if (bucket) {
      for (var tupel = 0; tupel < bucket.length; tupel++) {
        //if the input key matches the 0 indexed item in the bucket
        if (tupel[i][0] === key) {
          //remove the tupel from the bucket
          size--;
          bucket.splice(i, 1);
        }
      }
    }
    // Resize by halfing the storage as the total number of items stored is less than 1/4th of the number of slots in the storage array
    if (size / storageLimit <= 0.25) {
      storageResizer(storageLimit / 2);
    }
  };

  //storageResizer() is given a new storage limit (an integer)
  result.storageResizer = function(newSize) {
    //save the old storage limit
    var prevStorage = storageLimit;
    //set the storageLimit equal to the param new size and incase its a decimal round up the value
    storageLimit = Math.ceil(newSize);
    //to create an entirely new storage array clear the storage
    storage = [];
    //iterate through the old storage array
    for (var l = 0; l < prevStorage.length; l++) {
      var index = getIndexBelowMaxForKey(bucket[l][0], storageLimit)
      var newBucket = storage[index];
      //if the new bucket has contents i.e. tupels
      if (newBucket) {
        //push thr given new key value pair in
        newBucket.push([bucket[l][0], bucket[l][1]]);
      } else {
        //set the new bucket to an empty arr
        newBucket = [];
        //push the new key value pair in
        newBucket.push([bucket[l][0], bucket[l][1]]);
      }
    }
  }
  return result;
};


//TEST SUITE
var hashTable = makeHashTable();
console.log(hashTable);
console.log(hashTable.insert);
console.log(hashTable.remove);
console.log(hashTable.retrieve);
console.log(hashTable.storageResizer);