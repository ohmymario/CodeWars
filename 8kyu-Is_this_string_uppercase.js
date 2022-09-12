String.prototype.isUpperCase = function () {
  const comparison = [...this].map((char) => char.toUpperCase()).join("");
  return comparison === this.toString();
};
