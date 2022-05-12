function getCount(str) {
  let vowelsCount = 0;
  let strArr = [...str];
  const vowels = ["a", "e", "i", "o", "u"];

  strArr.forEach((char) => {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}
