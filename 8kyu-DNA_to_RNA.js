function DNAtoRNA(dna) {
  const result = [...dna].map((x) => (x === "T" ? "U" : x)).join("");

  return result;
}
