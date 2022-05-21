function rot13(message) {
  let alpha = [
    ..."abcdefghijklmnopqrstuvwxyz",
    ..."abcdefghijklmnopqrstuvwxyz",
  ];
  let arrMessage = [...message];

  let updatedMsg = arrMessage
    .map((v) => {
      let index = alpha.findIndex((x) => x === v.toLowerCase());
      if (index === -1) return v;
      let capital = v === v.toUpperCase();
      return capital ? alpha[index + 13].toUpperCase() : alpha[index + 13];
    })
    .join("");

  return updatedMsg;
}
