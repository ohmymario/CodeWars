function rentalCarCost(d) {
  const day = 40;
  const weekPlusDisc = 50;
  const threeDaydisc = 20;

  if (d >= 7) return day * d - weekPlusDisc;
  if (d >= 3) return day * d - threeDaydisc;
  return day * d;
}
