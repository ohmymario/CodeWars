function sumMul(n, m) {
  if (m < n || m === 0) return "INVALID";
  let counter = 0;
  let nextValue = n;
  while (nextValue < m) {
    counter += nextValue;
    nextValue = nextValue + n;
  }
  return counter;
}
