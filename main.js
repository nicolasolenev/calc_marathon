const calc = (operation, a, b) => {
  const operations = {
    sum: (c, d) => +c + +d,
    sub: (c, d) => c - d,
    mult: (c, d) => c * d,
    div: (c, d) => c / d
  };
  console.log(operations);

  if (!(operation in operations)) return "unknown operation"; // Если операция не существует

  const answer = operations[operation](a, b); // Произвести вычисление

  if (!isFinite(answer)) return "Error"; // Если ответ не является числом

  return answer;
};
