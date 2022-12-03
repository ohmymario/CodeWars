function findNextSquare(sq) {
  const firstSq = Math.sqrt(sq);
  const nextSq = firstSq + 1;
  return Number.isInteger(firstSq) ? nextSq * nextSq : -1;
}
