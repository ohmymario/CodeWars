const digital_root = (n) => {
  let intArr = Array.from(String(n), Number);
  let sum = intArr.reduce((x, y) => x + y, 0);

  if (intArr.length === 1) return n;
  return digital_root(sum);
};
