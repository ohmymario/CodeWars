function billboard(name, price = 30) {
  let total = 0;

  [...name].forEach((char) => {
    total += price;
  });

  return total;
}
