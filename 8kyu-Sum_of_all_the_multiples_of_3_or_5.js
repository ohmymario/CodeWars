function findSum(n) {
  let allValues = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      allValues.push(i);
    }
  }

  return allValues.reduce((curr, acc) => curr + acc, 0);
}
