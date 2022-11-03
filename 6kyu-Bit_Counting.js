const countBits = (n) =>
  n
    .toString(2)
    .split("")
    .map(Number)
    .reduce((x, y) => x + y, 0);
