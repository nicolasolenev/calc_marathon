function calc(operation, a, b) {

  function checkIncorrectValue(a) {
    return typeof a !== 'number' || !isFinite(a);
  }

  const isIncorrectValue = checkIncorrectValue(a) || checkIncorrectValue(b);
  const checkDivisionByZero = (operation === 'div' || operation === 'rem') && b === 0;

  if (isIncorrectValue) {
    return 'Error';
  } else if (checkDivisionByZero) {
    return 'На ноль делить нельзя';
  } else if (operation === 'sum') {
    return a + b;
  } else if (operation === 'dif') {
    return a - b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'div') {
    return a / b;
  } else if (operation === 'rem') {
    return a % b;
  } else if (operation === 'exp') {
    return a ** b;
  } else {
    return 'unknown operation';
  }
}