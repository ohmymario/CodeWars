function squareDigits(num) {
  let solution = [...`${num}`]
    .map((x) => {
      return `${Number(x) * Number(x)}`;
    })
    .join("");

  return Number(solution);
}
