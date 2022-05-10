function checkOdd(x) {
  return x.length || x % 2 !== 0;
}

function solution(str) {
  let newStr = checkOdd(str) ? `${str}_` : str;
  let arrStr = [...newStr];
  let sepArr = [];

  arrStr.forEach((_, i) => {
    if (checkOdd(i) && i !== 0) sepArr.push(`${arrStr[i - 1]}${arrStr[i]}`);
  });

  return sepArr;
}
