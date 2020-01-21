'use strict';

console.log('TASK5------------------------');

const checkForSpam = message => {
  const wordLowerCase = message.toLowerCase();
  if (wordLowerCase.includes('spam') || wordLowerCase.includes('sale')) {
    return true;
  } else return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best SaLe offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
