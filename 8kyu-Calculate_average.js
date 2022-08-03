const find_average = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((x, y) => x + y, 0) / array.length;
};
