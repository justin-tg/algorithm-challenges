
/*
  Given a sorted array that has been rotated some number of items right or
  left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
  how can you efficiently find an element? For simplicity, you can assume
  that there are no duplicate elements in the array

  rotatedArraySearch should return the index of the element if it is in the
  array and should return null otherwise

  Target time complexity: O(log(array.length))
 */

  const rotatedArraySearch = function (rotatedArr, target) {
    let left = 0;
    let right = rotatedArr.length - 1;
    let result = resolve(rotatedArr, target, left, right);
    return result;
  };

  function resolve(rotatedArr, target, left, right) {
    // let right lookup with pivot
    if (left > right) {
      return -1;
    }
    let mid = left + Math.floor((right - left) / 2);

    if (rotatedArr[mid] == target) return mid;
    if (rotatedArr[left] == target) return left;
    if (rotatedArr[right] == target) return right;

    if (rotatedArr[left] < rotatedArr[mid]) {
      // if left side sorted
      if (target > rotatedArr[left] && target < rotatedArr[mid]) {
        // if item in sorted list
        return resolve(rotatedArr, target, left, mid - 1);
      }
      return resolve(rotatedArr, target, mid + 1, right);
    }
    if (rotatedArr[mid] < rotatedArr[right]) {
      // right is sorted
      if (target > rotatedArr[mid] && target <= rotatedArr[right]) {
        // if item in sorted list
        return resolve(rotatedArr, target, mid + 1, right);
      }
      return resolve(rotatedArr, target, left, mid - 1);
    }
    return null;
  }

  //TEST SUITE
  let test1 = rotatedArraySearch([4,5,6,7,0,1,2], 0); //4
  console.log('expect 4: ', test1);

  let test2 = rotatedArraySearch([4,5,6,7,0,1,2], 3); //null
  console.log('expect null: ', test2);

  let test3 = rotatedArraySearch([1], 0); //null
  console.log('expect null: ', test3);

  let test4 = rotatedArraySearch([1], 1); //0
  console.log('expect 0: ', test4);

  let test5 = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);//5
  console.log('expect 5: ', test5);

  let test6 = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) //null
  console.log('expect null: ', test6);
