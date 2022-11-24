function findEvenIndex(arr) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < arr.length; i++) {
    left = arr.slice(0, i).reduce((a, b) => a + b, 0);
    right = arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);

    if (left === right) return i;
  }

  return -1;
}
