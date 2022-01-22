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
var getHash = function(str, max) {
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

// var makeHashTable = function() {
//   var result = {};
//   var storage = [];
//   var storageLimit = 4;
//   var size = 0;

//   result.insert = function(key, value) {
//     var index = getHash(key, storageLimit)
//     var bucket = storage[index];
//     //if the bucket contains content
//     if (bucket) {
//       //iterate through each tupel array in the bucket
//       for (var tupel of bucket) {
//         //if the input key matches the 0 indexed item in the bucket
//         if (tupel[0] === tupel) {
//           //return the pair value property at index 1
//           tupel[1] = value;
//         }
//       } //finish iterating through entire bucket
//       //if the key wasn't found then the key value pair is not in the bucket so push to insert it
//       bucket.push([key, value]);
//     //otherwise the bucket is empty or nothing
//     } else {
//       //the storage[index] is an empty array
//       //push the given key value pair in an array into the bucket
//       storage[index].push([key, value]);
//     }
//     //double the storage limit as soon as the total number of items stored is greater than 3/4th of the number of slots in the storage array
//     if (size / storageLimit >= 0.75) {
//       storageResizer(storageLimit * 2);
//     }

//   };

//   result.retrieve = function(key) {
//     // TODO: implement `retrieve`
//     var index = getHash(key, storageLimit)
//     var bucket = storage[index];
//     if (bucket) {
//       for (var tupel of bucket) {
//         //if the input key matches the 0 indexed item in the bucket
//         if (tupel[0] === tupel) {
//           //return the pair value property at index 1
//           return tupel[1];
//         }
//       }
//     }
//     return undefined;
//   };

//   result.remove = function(key) {
//     var index = getHash(key, storageLimit)
//     var bucket = storage[index];
//     if (bucket) {
//       for (var tupel = 0; tupel < bucket.length; tupel++) {
//         //if the input key matches the 0 indexed item in the bucket
//         if (tupel[i][0] === key) {
//           //remove the tupel from the bucket
//           size--;
//           bucket.splice(i, 1);
//         }
//       }
//     }
//     // Resize by halfing the storage as the total number of items stored is less than 1/4th of the number of slots in the storage array
//     if (size / storageLimit <= 0.25) {
//       storageResizer(storageLimit / 2);
//     }
//   };

//   //storageResizer() is given a new storage limit (an integer)
//   result.storageResizer = function(newSize) {
//     //save the old storage limit
//     var prevStorage = storageLimit;
//     //set the storageLimit equal to the param new size and incase its a decimal round up the value
//     storageLimit = Math.ceil(newSize);
//     //to create an entirely new storage array clear the storage
//     storage = [];
//     //iterate through the old storage array
//     for (var l = 0; l < prevStorage.length; l++) {
//       var index = getHash(bucket[l][0], storageLimit)
//       var newBucket = storage[index];
//       //if the new bucket has contents i.e. tupels
//       if (newBucket) {
//         //push thr given new key value pair in
//         newBucket.push([bucket[l][0], bucket[l][1]]);
//       } else {
//         //set the new bucket to an empty arr
//         newBucket = [];
//         //push the new key value pair in
//         newBucket.push([bucket[l][0], bucket[l][1]]);
//       }
//     }
//   }
//   return result;
// };


// //TEST SUITE
// var hashTable = makeHashTable();
// console.log(hashTable);
// console.log(hashTable.insert);
// console.log(hashTable.remove);
// console.log(hashTable.retrieve);
// console.log(hashTable.storageResizer);

// //FAILING TESTS
// //hashTable should be able to resize
// //AssertionError: expected 0 to be above 0.05

// //1
// function () {
//   // If your hashtable isn't resizing, its going to start running more and more slowly with a large number of inserts and retrievals.
//   var hashTable = makeHashTable();
//   var n = 10;
//   var id = 0;
//   var diffs = [];
//   var endTime;
//   var startTime;
//   for (var i = 0; i <= n; i++) {
//     startTime = new Date();
//     for (var j = 0; j < 1000; j++) {
//       hashTable.insert('userid:' + id++, 'Syd Mead');
//     }
//     for (j = 0; j < 100; j++) {
//       hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
//     }
//     endTime = new Date();
//     diffs.push(endTime - startTime);
//   }
//   var sum = function sum(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }
//     return total;
//   };
//   // We should expect the first iteration to take up roughly 1 / n of the total time. We give it some wiggle room by letting it be as low as a 1 / (n*2) of the total duration
//   var ratio = diffs[0] / sum(diffs);
//   ratio.should.be.above(1 / (n * 2));
// }

// //2
// //hashTable #insert should take exactly two arguments. a key and a value
// //AssertionError: expected 0 to equal 2
// function () {
//   var hashTable = makeHashTable();
//   hashTable.insert.length.should.equal(2);
//   //A Hash Table gets its awesomeness from associating data. It wouldn't be very useful if you just gave it data without any association
// }

// //3
// //hashTable #retrieve should take exactly one argument
// //AssertionError: expected 0 to equal 1
// function () {
//   var hashTable = makeHashTable(); // the retrieve function should only take a single `key` argument
//   hashTable.retrieve.length.should.equal(1);
// }

// //4
// //hashTable #retrieve should return values previously inserted
// //AssertionError: expected undefined to exist
// function () {
//   var hashTable = makeHashTable();
//   hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
//   var value = hashTable.retrieve('William Shatner\'s most well known role');
//   should.exist(value);
//   value.should.be.equal('Captain Kirk');
// }

// //5
// //hashTable #insert should allow valus to be updated
// //AssertionError: expected undefined to exist
// function () {
//   var hashTable = makeHashTable();
//   hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
//   hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
//   var value = hashTable.retrieve('Tarantino\'s best movie');
//   should.exist(value);
//   value.should.be.equal('Pulp Fiction');
// }

// //6
// // hashTable #remove should take exactly one argument
// //AssertionError: expected 0 to equal 1
// function () {
//   var hashTable = makeHashTable(); // the remove function should only take a single `key` argument
//   hashTable.remove.length.should.equal(1);
// }


var makeHashTable = function() {
  var result = {};
  var storage = {};
  var storageLimit = 4;
  var size = 0;
  var resizing= false;

  result.insert = function(key, value) {
    var hash = getHash(key, storageLimit);
    var pairs = storage[hash] = storage[hash] || [];
    var replaced = false;

    pairs.forEach(function(pair){
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    });
    if (!replaced) {
      pairs.push([key, value]);
      size++;
      if (size > storageLimit * 0.75) {
        resize(storageLimit * 2);
      }
    }
  }

  result.retrieve = function(key) {
    var hash = getHash(key, storageLimit);
    var pairs = storage[hash];
    var value;

    if (!pairs) {
      return;
    }

    pairs.forEach(function(pair){
      if (pair[0] === key) {
        value = pair[1];
      }
    });
    return value;
  }

  result.remove = function(key) {
    var hash = getHash(key, storageLimit);
    var pairs = storage[hash];
    var value;
    var removeIndex;

    pairs.forEach(function(pair, index){
      if (pair[0] === key) {
        value = pair[1];
        size--;
        removeIndex = index;
      }
    });

    pairs.splice(removeIndex, 1);

    if (storageLimit > 4 && size < storageLimit * 0.25) {
      resize(storageLimit / 2);
    }
    return value;
  }

  function resize(newSize) {
    if(!resizing) {
      resizing= true;
      var buckets = storage;
      storageLimit = newSize;
      storage = [];
      size = 0;
    }

    buckets.forEach(function(bucket){
      bucket.forEach(function(tuple){
        result.insert(tuple[0], tuple[1]);
      });
    });
    resizing = false;
  }


  return result;
}