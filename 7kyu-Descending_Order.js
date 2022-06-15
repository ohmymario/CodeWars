const descendingOrder = (n) => {
  let intArr = Array.from(String(n), Number);
  let sorted = intArr
    .sort((a, b) => b - a)
    .map((x) => `${x}`)
    .join("");

  return Number(sorted);
};
