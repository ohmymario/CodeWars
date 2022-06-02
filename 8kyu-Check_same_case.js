function sameCase(a, b) {
  if (!/[a-zA-Z]/.test(a)) return -1;
  if (!/[a-zA-Z]/.test(b)) return -1;

  if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) return 1;
  if (/[a-z]/.test(a) && /[a-z]/.test(b)) return 1;
  return 0;
}
