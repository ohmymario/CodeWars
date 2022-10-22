function points(games) {
  let total = 0;

  games.forEach((score) => {
    const [x, y] = score.split(":");
    if (Number(x) > Number(y)) total += 3;
    if (Number(x) < Number(y)) total += 0;
    if (Number(x) === Number(y)) total += 1;
  });

  return total;
}
