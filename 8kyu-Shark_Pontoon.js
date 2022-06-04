function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let trueSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
  let sharkTime = trueSharkSpeed / sharkDistance;
  let youTime = youSpeed / pontoonDistance;

  if (sharkTime < youTime) return `Alive!`;
  return `Shark Bait!`;
}
