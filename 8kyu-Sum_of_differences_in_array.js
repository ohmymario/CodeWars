function sumOfDifferences(arr) {
  let counter = 0;
  let desc = arr.sort((a, b) => b - a);

  desc.forEach((v, i) => {
    if (i === desc.length - 1) return;
    counter += v - desc[i + 1];
  });

  return counter;
}
