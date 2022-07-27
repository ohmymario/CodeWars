function countPositivesSumNegatives(input) {
  let positiveArr = 0;
  let negativeArr = 0;

  if (!input || input.length === 0) return [];

  for (value of input) {
    if (value > 0) positiveArr++;
    if (value < 0) negativeArr += value;
  }

  return [positiveArr, negativeArr];
}
