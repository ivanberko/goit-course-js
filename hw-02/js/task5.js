
console.log('TASK5------------------------');

const checkForSpam = (message) => {
  const wordLowerCase = message.toLowerCase();
  return (wordLowerCase.includes('spam') || wordLowerCase.includes('sale'));
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best SaLe offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
