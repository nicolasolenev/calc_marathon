const calc = (operation, a, b) => {
  const operations = {
    sum: (a, b) => +a + +b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  if (!(operation in operations)) return 'unknown operation'; // Если операция не существует

  const answer = operations[operation](a, b); // Произвести вычисление

  if (!isFinite(answer)) return "Error"; // Если ответ не является числом

  return answer;
};