function expressionMatter(a, b, c) {
  let values = [...arguments];

  let fMult = values.reduce((a, b) => a * b, 1);
  let fAdd = values.reduce((a, b) => a + b, 0);
  let fParens = (values[0] + values[1]) * values[2];
  let lParens = values[0] * (values[1] + values[2]);
  return Math.max(fMult, fAdd, fParens, lParens);
}
