function powersOfTwo(n) {
  let powerArr = [];

  for (let i = 0; i < n + 1; i++) {
    powerArr.push(Math.pow(2, i));
  }

  return powerArr;
}
