function printerError(s) {
  const errors = [...s].filter((value) =>
    value.charCodeAt(0) > 109 ? true : false
  );
  return `${errors.length}/${s.length}`;
}
