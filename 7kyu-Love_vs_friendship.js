function wordsToMarks(string) {
  let total = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrABC = [...alphabet];

  [...string].forEach((x, i) => {
    let index = arrABC.indexOf(x);
    total += index + 1;
  });

  return total;
}
