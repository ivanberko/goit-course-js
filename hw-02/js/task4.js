'use strict';

console.log('TASK4------------------------');

const formatString = string => {
  if (string.length <= 40) {
    return string;
  } else return `${string.slice(0, 40)}...`;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
