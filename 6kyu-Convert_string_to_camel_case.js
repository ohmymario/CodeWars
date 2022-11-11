function toCamelCase(str) {
  let prevRemoved = false;
  return [...str]
    .map((x) => {
      if (x === "-" || x === "_") {
        prevRemoved = true;
        return "";
      }
      if (prevRemoved) {
        prevRemoved = false;
        return x.toUpperCase();
      }
      return x;
    })
    .join("");
}
