function createPhoneNumber(numbers) {
  return numbers
    .map((x, i) => {
      if (i === 0) return `(${x}`;
      if (i === 2) return `${x})`;
      if (i === 3) return ` ${x}`;
      if (i === 5) return `${x}-`;
      return x;
    })
    .join("");
}
