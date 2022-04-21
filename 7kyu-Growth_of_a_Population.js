function nbYear(p0, percent, aug, p) {
  let year = 0;
  while (p > p0) {
    p0 = p0 + p0 * (percent * 0.01) + aug;
    year++;
  }
  return year;
}
