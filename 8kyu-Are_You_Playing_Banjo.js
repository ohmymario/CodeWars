const areYouPlayingBanjo = (name) => {
  let arrName = [...name][0].toLowerCase();
  if (arrName[0] === "r") return `${name} plays banjo`;
  return `${name} does not play banjo`;
};
