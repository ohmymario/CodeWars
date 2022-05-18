var orderedCount = function (text) {
  let result = [];
  let textArray = [...text];
  let uniqueValues = [...new Set([...text])];
  uniqueValues.forEach((v) => {
    const length = textArray.filter((item) => item === v).length;
    result.push([`${v}`, length]);
  });

  return result;
};
