function findOdd(A) {
  const counter = {};
  let foundOdd = null;

  A.forEach((val) => {
    counter[val] ? counter[val]++ : (counter[val] = 1);
  });

  console.log(counter);

  for (const key in counter) {
    if (counter[key] % 2 === 1 || counter[key] === 1) {
      foundOdd = key;
    }
  }

  return Number(foundOdd);
}
