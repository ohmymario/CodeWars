const dbl = (n) => Math.pow(n, 2);

const isPythagoreanTriple = (integers) => {
  let [a, b, c] = [...integers].sort((a, b) => a - b);
  return dbl(a) + dbl(b) === dbl(c);
};
