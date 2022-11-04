function accum(s) {
  let allLower = s.toLowerCase();
  let mumblified = [...allLower]
    .map((x, i) => {
      return `${x.toUpperCase()}${x.repeat(i)}`;
    })
    .join("-");

  return mumblified;
}
