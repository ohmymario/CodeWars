function findOutlier(integer) {
  var even = integer.filter((x) => x % 2 === 0);
  var odd = integer.filter((x) => x % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
