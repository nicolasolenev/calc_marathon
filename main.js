const calc = (operation, a, b) => {
  const operations = {
    sum: () => +a + +b,
    sub: () => a - b,
    mult: () => a * b,
    div: () => a / b
  };

  if (operation === undefined || a === undefined || b === undefined) {
    return "Error";
  } else if (!(operation in operations)) return "unknown operation";

  const answer = operations[operation]();

  if (!isFinite(answer)) return "Error";

  return answer;
};
