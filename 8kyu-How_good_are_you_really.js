function betterThanAverage(classPoints, yourPoints) {
  const avg = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
  return yourPoints > avg ? true : false;
}
