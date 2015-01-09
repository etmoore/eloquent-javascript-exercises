function countBs(string) {
  var count = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'b')
      count++;
  }
  return count;
}

function countChar(string, character) {
  var count = 0;
  string = string.toLowerCase();
  character = character.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === character)
      count++;
  }
    return count;
}
