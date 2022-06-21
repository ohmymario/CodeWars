function removeChar(str) {
  let strArr = [...str];
  strArr.pop();
  strArr.shift();
  return strArr.join("");
}
