function invert(array) {
  if (array.length === 0) return [];

  const inverted = array.map((x) => {
    if (x >= 0) return -x;
    if (x <= 0) return Math.abs(x);
  });

  return inverted;
}
