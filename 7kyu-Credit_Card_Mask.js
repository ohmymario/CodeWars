function maskify(cc) {
  if (cc.length > 4) {
    const lastFour = cc.slice(-4);
    const asterisks = "#".repeat(cc.length - 4);
    return `${asterisks}${cc.slice(-4)}`;
  }

  return cc;
}
