const positiveSum = (arr) =>
  arr.length === 0
    ? 0
    : arr.filter((v) => v > 0).reduce((prev, curr) => prev + curr, 0);
