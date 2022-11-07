function getMiddle(s) {
  const strLength = s.length;
  const evenOdd = strLength % 2 === 0 ? "EVEN" : "ODD";
  const startingLoc = Math.ceil(strLength / 2 - 1);

  if (evenOdd === "EVEN") return `${s[startingLoc]}${s[startingLoc + 1]}`;
  if (evenOdd === "ODD") return s[startingLoc];
}
