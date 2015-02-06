function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(3, 2));

function answer(x) {
  if (x === 0)
    return 1;
  else
    return (7)
}
