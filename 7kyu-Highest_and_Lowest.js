function highAndLow(numbers) {
  let allNums = numbers.split(" ").map(Number);
  return `${Math.max(...allNums)} ${Math.min(...allNums)}`;
}
