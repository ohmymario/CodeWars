function nextId(ids) {
  const sorted = ids.sort((a, b) => a - b);
  const removedDup = [...new Set([...sorted])];

  for (let i = 0; i < removedDup.length; i++) {
    if (removedDup[i] !== i) {
      return i;
    }
  }

  return removedDup[removedDup.length - 1] + 1;
}
