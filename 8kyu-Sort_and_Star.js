function twoSort(s) {
  const firstValue = s.sort()[0];
  const wordLength = firstValue.length;

  return [...firstValue]
    .map((char, i) => {
      if (wordLength === i + 1) return `${char}`;
      return `${char}***`;
    })
    .join("");
}
