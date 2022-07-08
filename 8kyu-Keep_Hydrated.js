const litres = (time) => {
  let waterPerHour = 0.5;
  let result = Math.floor(time * waterPerHour);

  return result;
};
