function getSum(a, b) {
  if (a === b) return a;

  let result = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  while (max >= min) {
    result += min;
    min++;
  }

  return result;
}
