function findNeedle(haystack) {
  const found = haystack.findIndex((x) => x === "needle");
  return `found the needle at position ${found}`;
}
