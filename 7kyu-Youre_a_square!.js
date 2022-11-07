var isSquare = function (n) {
  if (n < 0) return false;
  if (n === 0) return true;

  const squareNum = Math.sqrt(n);
  return Number.isInteger(squareNum);
};
