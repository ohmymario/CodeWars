function generateRange(min, max, step) {
  let rangeArr = [];
  for (let i = min; i <= max; i += step) {
    rangeArr.push(i);
  }

  return rangeArr;
}
