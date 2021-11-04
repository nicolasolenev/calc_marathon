const calc = (operation, a, b) => {
  const operations = {
    sum: (a, b) => +a + +b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  if (!(operation in operations)) return 'unknown operation';

  const answer = operations[operation](a, b);

  if (!isFinite(answer)) return "Error";

  return answer;
};