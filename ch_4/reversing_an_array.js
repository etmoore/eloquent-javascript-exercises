
function reverseArray(array) {
  new_array = [];
  for (var i = 0; i < array.length; i++) {
    new_array.unshift(array[i]);
  }
  return new_array;
}

function reverseArrayInPlace(array) {
  for (var i = 1; i <= Math.floor(array.length / 2); i++) {
    var holder = array[array.length - i];
    array[array.length - i] = array[i];
    array[i] = holder;
  }
  return array;
}

var array = [1, 2, 3, 4, 5, 6, 7];

console.log(reverseArray(array));
//=> [7, 6, 5, 4, 3, 2, 1]

console.log(reverseArrayInPlace(array));
//=> [7, 6, 5, 4, 3, 2, 1]
