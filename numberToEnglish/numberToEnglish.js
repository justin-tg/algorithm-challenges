/*
  Extend the Number prototype with a new method called `toEnglish`
  It should return the number as a string using English words
  Extra credit: Make your function support decimals
 */

  const numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  };

  Number.prototype.toEnglish = function () {
    let num = this;
    let suffixIndex = 0;
    let string = '';

    while(num > 0) {
      string =
        parseHundreds(
          num%1000,
          suffixIndex < 3 ? '' : ` ${numbersToPlace[10**suffixIndex]} `
          ) +
        string;

      suffixIndex += 3;
      num = Math.floor(num / 1000);
    }

    return string.trim();

    function parseHundreds(n, suffix) {
      if(n===0){return ''};
      let h = Math.floor(n/100) % 10;
      let t = n % 100;
      let tensones;
      if(t === 0) { tensones = '' }
      else if(t <= 20) {
        tensones = numbersToWords[t];
      } else {
        let o = t % 10;
        tensones = ` ${numbersToWords[t - o]}${o > 0 ? `-${numbersToWords[o]}` : ''}`
      }
      return `${h !== 0 ? numbersToWords[h] + ' hundred' : ''}${tensones}${suffix}`;
    }

  };

  //TEST SUITE
  let test1 = (7).toEnglish();// > "seven"
  console.log('expect: seven: ', test1);

  let test2 = (575).toEnglish(); // > "five hundred seventy-five"
  console.log('expect: five hundred seventy-five: ', test2);

  let test3 = (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
  console.log('expect seventy-eight million one hundred ninety-three thousand five hundred twelve: ', test3);

  //EC: decimals
  // let test10 = (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
  // console.log('expect one hundred fifty thousand forty-three and two hundred seventy three thousandth: ', test10);