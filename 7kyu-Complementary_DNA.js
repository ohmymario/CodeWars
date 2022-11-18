function DNAStrand(dna) {
  return [...dna]
    .map((x) => {
      if (x === "A") return "T";
      if (x === "T") return "A";
      if (x === "C") return "G";
      if (x === "G") return "C";
    })
    .join("");
}
