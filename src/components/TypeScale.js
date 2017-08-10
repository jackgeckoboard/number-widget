function TypeSize(n) {
  let typeScale = [
    18,
    21,
    24,
    28,
    32,
    36,
    42,
    48,
    55,
    63,
    73,
    84,
    96,
    110,
    127,
    146,
    167,
    192,
    253,
    291
  ];
  if (n < 0) {
    return typeScale[0];
  } else {
    return typeScale[n];
  }
}
export { TypeSize };
