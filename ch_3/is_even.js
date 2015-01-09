function isEven(n) {
  n = Math.abs(n);
  if(n === 0 ) {
    return 'even';
  }
  else if (n === 1) {
    return 'odd';
  }
  else {
    return isEven(n - 2);
  }
}
