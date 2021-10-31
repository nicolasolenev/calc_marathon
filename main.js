//  Калькулятор
function calc(operation, a, b) {

  const isUnvalidNumber = checkIsWrongNumber(a) || checkIsWrongNumber(b);

  if (isUnvalidNumber) {
    return 'Error'
  } else if (operation = 'sum') {
    return a + b;
  } else if (operation = 'dif') {
    return a - b;
  } else if (operation = 'multi') {
    return a * b;
  } else if (operation = 'div') {
    if (b === 0) {
      return 'На ноль делить нельзя'
    }
    return a / b;
  } else if (operation = 'rem') {
    if (b === 0) {
      return 'На ноль делить нельзя'
    }
    return a % b;
  } else if (operation = 'exp') {
    return a ** b;
  } else {
    return 'unknown operation'
  }
}

function checkIsWrongNumber(a) {
  return typeof a !== 'number' || !isFinite(a);
}