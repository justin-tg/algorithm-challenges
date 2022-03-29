// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

const editDistance = (str1, str2) => {
  const [len1, len2] = [str1.length, str2.length];
  const dp = [...new Array(len1 + 1)].map(() => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i += 1) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= len2; i += 1) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= len1; i += 1) {
    for (let j = 1; j <= len2; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
        );
      }
    }
  }

  return dp[len1][len2];
};

let test1 = editDistance("horse", "rose"); //3
//step1: horse -> orse (remove 'h')
//step2: orse -> rose (replace 'r' with 'o')
console.log('expect 2: ', test1);

let test2 = editDistance("intention", "execution"); //5
//step1 intention -> inention (remove 't')
//step2 inention -> enention (replace 'i' with 'e')
//step3 enention -> exention (replace 'n' with 'x')
//step4 exention -> exection (replace 'n' with 'c')
//step5 exection -> execution (insert 'u')
console.log('expect 5: ', test2);

// let test3 = editDistance("", "");