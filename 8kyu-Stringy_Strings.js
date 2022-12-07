function stringy(size) {
  let solution = "";
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? (solution += "1") : (solution += "0");
  }
  return solution;
}
