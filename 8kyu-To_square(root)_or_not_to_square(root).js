const squareOrSquareRoot = (array) => {
  return array.map(v => Math.sqrt(v) % 1 === 0 ? Math.sqrt(v) : v * v)
}