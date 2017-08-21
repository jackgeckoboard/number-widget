function TypeSize(n) {
  const baseFontSize = 12;
  if (n < 3) {
    return 18;
  } else {
    return Math.round(baseFontSize * Math.pow(2, n / 5));
  }
}
export { TypeSize };
