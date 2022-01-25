/**
 * Given an arbitrary input string
 * return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  var theString = string.toLowerCase();
  var index;
  var obj = {};
  var arr = theString.split('');
  for (var letter of arr) {
    if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    } else {
      obj[letter] = 1;
    }
  }
  for (var item of arr) {
    if (obj[item] === 1) {
      index = arr.indexOf(item);
      return string.charAt(index);
    }
  }
  return 'No non-repeated chars in input string';
};

//TEST SUIT
var test1 = 'jutajustboink';
console.log('should be a:', firstNonRepeatedCharacter(test1))

var test2 = 'yokesisbadyok'
console.log('should be e:', firstNonRepeatedCharacter(test2))

console.log('should be B:', firstNonRepeatedCharacter('ABA'));

console.log('should be C:', firstNonRepeatedCharacter('AACBDB'));