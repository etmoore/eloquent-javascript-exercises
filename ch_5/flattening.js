var arrays = [[1, 2, 3], [4, 5], [6]];

flatArray = arrays.reduce(function(prev, current){
	return prev.concat(current);
});

console.log(flattenedArray);

// → [1, 2, 3, 4, 5, 6]
