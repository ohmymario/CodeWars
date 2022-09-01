function comp(array1, array2) {
  if (!array1 || !array2) return false;

  const sortedArr1 = array1.sort((a, b) => a - b).join("");
  const sqrtArr2 = array2
    .map((x) => Math.sqrt(x))
    .sort((a, b) => a - b)
    .join("");

  return sqrtArr2 === sortedArr1;
}
