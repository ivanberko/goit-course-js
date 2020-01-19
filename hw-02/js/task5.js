'use strict';

console.log('TASK5------------------------')

const checkForSpam = function(messageStr) {
  let arrayMessage = messageStr.split(' ');
  for (let toFindSpam of arrayMessage) {
    let wordLowerCase = toFindSpam.toLowerCase();
    if (wordLowerCase.includes('spam') || wordLowerCase.includes('sale'))
      return true;
  }
  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best SaLe offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
