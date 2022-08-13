const arrayPlusArray = (arr1, arr2) => {
  const oneArr = [...arr1, ...arr2];
  return oneArr.reduce((x, y) => x + y, 0);
};
