'use strict';

const findLongestWord = function(string) {
  const arrayWords = string.split(' ');
  let longestWord = arrayWords[0];
  for (const arrayWord of arrayWords) {
    if (arrayWord.length > longestWord.length) {
      longestWord = arrayWord;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
