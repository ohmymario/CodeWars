const abbrevName = (name) =>
  name
    .split(" ")
    .map((x) => `${x[0]}`.toUpperCase())
    .join(".");
