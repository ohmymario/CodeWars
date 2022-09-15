function mergeArrays(arr1, arr2) {
  const mergedSet = new Set([...arr1, ...arr2]);
  const sortedArr = [...mergedSet].sort((a, b) => a - b);
  return sortedArr;
}
