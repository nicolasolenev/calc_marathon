const calc = (operation, a, b) => {
  const operations = {
    sum: (c, d) => +c + +d,
    sub: (c, d) => c - d,
    mult: (c, d) => c * d,
    div: (c, d) => c / d
  };

  if (b === undefined) return "Error";
  else if (!(operation in operations)) return "unknown operation";

  const answer = operations[operation](a, b);
  if (!isFinite(answer)) return "Error";
  return answer;
};
