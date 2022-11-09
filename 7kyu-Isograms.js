function isIsogram(str) {
  const lower = str.toLowerCase();
  const dupeRemoved = [...new Set([...lower])].join("");
  return lower === dupeRemoved;
}
