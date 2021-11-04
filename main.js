const calc = (operation, a, b) => {
  const operations = {
    sum: +a + +b,
    sub: a - b,
    mult: a * b,
    div: a / b,
  }

  if (!(operation in operations)) return "unknown operation"; // Если операция не существует

  const answer = operations[operation]; // Произвести вычисление

  if (!isFinite(answer)) return "Error"; // Если ответ не является числом

  return answer;
}