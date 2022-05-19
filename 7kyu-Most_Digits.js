function findLongest(array) {
  const largest = (Math.max(...array) + "").length;
  const longest = array.find((x) => `${x}`.length === largest);
  return longest;
}
