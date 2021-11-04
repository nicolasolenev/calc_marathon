const calc = (operation, a, b) => {
  const checkValue = num => typeof num !== "number" || !isFinite(num);
  const isIncorrectValue = checkValue(a) || checkValue(b);
  const checkDivisionByZero = (operation === "div" || operation === "rem") && b === 0;
  const operations = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  if (isIncorrectValue || checkDivisionByZero) {
    return "Error";
  }

  if (!(operation in operations)) {
    return 'unknown operation'
  }

  return operations[operation](a, b);
};