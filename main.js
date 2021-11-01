//  Калькулятор
function calc(operation, a, b) {

  function checkIsWrongNumber(a) {
    return typeof a !== 'number' || !isFinite(a);
  }

  const isUnvalidNumber = checkIsWrongNumber(a) || checkIsWrongNumber(b);

  if (isUnvalidNumber) {
    return 'Error';
  } else if (operation === 'div' || operation === 'rem' && a === 0 || b === 0) {
    return 'На ноль делить нельзя';
  } else if (operation = 'sum') {
    return a + b;
  } else if (operation = 'dif') {
    return a - b;
  } else if (operation = 'multi') {
    return a * b;
  } else if (operation = 'div') {
    return a / b;
  } else if (operation = 'rem') {
    return a % b;
  } else if (operation = 'exp') {
    return a ** b;
  } else {
    return 'unknown operation';
  }
}

const answer = calc('sum', 10, 0);
console.log(answer);