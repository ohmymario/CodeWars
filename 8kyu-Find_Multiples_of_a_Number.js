function findMultiples(integer, limit) {
  let multiplesArray = [];
  let currValue = integer;

  while (currValue <= limit) {
    multiplesArray.push(currValue);
    currValue += integer;
  }

  return multiplesArray;
}
