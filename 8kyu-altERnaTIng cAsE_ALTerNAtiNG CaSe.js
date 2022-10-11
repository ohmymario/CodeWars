String.prototype.toAlternatingCase = function () {
  const wordArray = [...this];
  const flippedWordArray = wordArray.map((char) =>
    char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
  );
  return flippedWordArray.join("");
};
