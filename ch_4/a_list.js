function arrayToList(array) {
  // produces a list from an array
  list = null; // start with the end of the list
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // produces an array from a list
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  // creates a new list that adds the element to the front of the input list
  // (essentially creates a new list with one more item in the front)
  return {value: value, rest: list};
}

function nth(list, n) {
  // returns the element at the given position in the list
  // or undefined when there is no such element
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
