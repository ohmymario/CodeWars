var uniqueInOrder = function (iterable) {
  return [...iterable].filter((char, i) => {
    if (char === iterable[i + 1]) return false;
    return true;
  });
};
