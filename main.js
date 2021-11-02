const calc = (operation, a, b) => {

  const checkIncorrectValue = a => typeof a !== 'number' || !isFinite(a);
  const isIncorrectValue = checkIncorrectValue(a) || checkIncorrectValue(b);
  const checkDivisionByZero = (operation === 'div' || operation === 'rem') && b === 0;

  if (isIncorrectValue || checkDivisionByZero) {
    return 'Error';
  }

  switch (operation) {
    case 'sum':
      return a + b;
    case 'dif':
      return a - b;
    case 'multi':
      return a * b;
    case 'div':
      return a / b;
    case 'rem':
      return a % b;
    case 'exp':
      return a ** b;
    default:
      return 'unknown operation';
  }

}