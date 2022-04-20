// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  let i = 0;
  for (let booln of arrayOfSheep) {
    if (booln === true) {
      i++;
      console.log(i);
    }
  }
  return i;
}
