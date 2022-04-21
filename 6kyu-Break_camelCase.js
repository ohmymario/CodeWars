// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let arrStr = [...string];
  let track = 0;

  const copy = [...arrStr];

  copy.forEach((item, index) => {
    if (item === item.toUpperCase()) {
      arrStr.splice(index + track, 0, " ");
      track++;
    }
  });

  return arrStr.join("");
}
